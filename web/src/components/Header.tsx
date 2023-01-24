import logoImage from '../assets/logo.svg'
import { Plus } from 'phosphor-react'
import { useState } from 'react'
import Modal from './Modal'

export const Header = () => {
  return (
    <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
      <img src={logoImage} alt='habits' />
      <Modal />
    </div>
  )
}
