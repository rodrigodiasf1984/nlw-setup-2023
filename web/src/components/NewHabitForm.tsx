import { Check } from 'phosphor-react'

export const NewHabitForm = () => {
  return (
    <form className='w-full flex flex-col mt-6'>
      <label className='font-semibold leading-tight' htmlFor='title'>
        Qual seu comprometimento
      </label>
      <input
        className='p-4 rounded-lg mt-3 bgzinc-800 texwhite placeholder:text-zinc-400'
        type='text'
        id='title'
        placeholder='Ex: Ler 30 minutos por dia'
        autoFocus
      />
      <label className='font-semibold leading-tight mt-4' htmlFor='description'>
        Qual a recorrência
      </label>
      <button className='mt-6 rounded-lg p4 gap-3 flex items-center font-semibold bg-green-600 justify-center hover:bg-green-500'>
        <Check size={20} weight='bold' />
        Confirmar
      </button>
    </form>
  )
}
