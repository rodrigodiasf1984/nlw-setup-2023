console.log('Service Worker Loaded...')

self.addEventListener('push', (e) => {
  e.waitUntil(
    self.registration.showNotification('Habits', {
      body: 'Notified by Habits!',
      icon: 'http://image.ibb.co/frYOFd/tmlogo.png'
    })
  )
})
