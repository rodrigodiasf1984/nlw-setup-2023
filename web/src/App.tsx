import './lib/dayjs'
import './styles/global.css'
import 'react-toastify/dist/ReactToastify.css'
import { Header } from './components/Header'
import { SummaryTable } from './components/SummaryTable'
import { ToastContainer } from 'react-toastify'
import { api } from './lib/axios'

const askForNotificationPermission = async () => {
  const permission = await window.Notification.requestPermission()
  if (permission === 'granted') {
    return true
  }
  return false
}

navigator.serviceWorker
  .register('service-worker.js')
  .then(async (serviceWorker) => {
    let subscription = await serviceWorker.pushManager.getSubscription()

    if (!subscription) {
      const publicKeyResponse = await api.get('/push/public_key')

      subscription = await serviceWorker.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicKeyResponse.data.publicKey
      })
    }
    await api.post('/push/register', { subscription })
    await api.post('/push/send', { subscription })
  })
  .catch((error) => {
    console.error('Error during service worker registration:', error)
  })

if (window.Notification && Notification.permission !== 'granted') {
  askForNotificationPermission()
}

export function App() {
  return (
    <>
      <ToastContainer theme='colored' autoClose={3000} />
      <div className='w-screen h-screen flex justify-center items-center'>
        <div className='w-full max-w-5xl px-6 flex flex-col gap-16'>
          <Header />
          <SummaryTable />
        </div>
      </div>
    </>
  )
}
