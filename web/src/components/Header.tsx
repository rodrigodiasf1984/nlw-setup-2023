import logoImage from '../../assets/logo.svg'
import { Plus } from 'phosphor-react'
import { useState } from 'react'
import Modal from './Modal'

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
      <img src={logoImage} alt='habits' />
      {isModalOpen && <Modal />}
      <button
        onClick={() => {
          console.log('clicked')
        }}
        type='button'
        className='border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300'
      >
        <Plus size={20} className='text-violet-500' />
        Novo hábito
      </button>
    </div>
  )
}
