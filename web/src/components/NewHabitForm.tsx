import { Check } from 'phosphor-react'
import * as Checkbox from '@radix-ui/react-checkbox'

const weekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado'
]

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
      <div
        className='flex flex-col gap-2 mt-3
      '
      >
        {weekDays.map((day) => (
          <Checkbox.Root key={day} className='flex items-center gap-3 group'>
            <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500 '>
              <Checkbox.Indicator>
                <Check size={20} className='text-white' />
              </Checkbox.Indicator>
            </div>
            <span className='text-white leading-tight'>{day}</span>
          </Checkbox.Root>
        ))}
      </div>
      <button className='mt-6 rounded-lg p4 gap-3 flex items-center font-semibold bg-green-600 justify-center hover:bg-green-500'>
        <Check size={20} weight='bold' />
        Confirmar
      </button>
    </form>
  )
}
