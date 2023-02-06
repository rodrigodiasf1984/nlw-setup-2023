import * as Dialog from '@radix-ui/react-dialog'
import { Plus, X } from 'phosphor-react'
import { NewHabitForm } from './NewHabitForm'

const Modal = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        type='button'
        className='border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-background'
      >
        <Plus size={20} className='text-violet-500' />
        Novo hábito
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='w-screen h-screen bg-black/80 fixed inset-0' />
        <Dialog.Content className='absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <Dialog.Close className='absolute right-6 top-6 text-zinc-400 hover:text-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-900'>
            <X size={20} aria-label='Fechar' />
          </Dialog.Close>
          <Dialog.Title className='text-3xl font-extrabold leading-tight'>
            Criar hábito
          </Dialog.Title>
          <NewHabitForm />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Modal
