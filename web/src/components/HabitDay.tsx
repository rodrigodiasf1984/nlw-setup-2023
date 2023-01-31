import * as Popover from '@radix-ui/react-popover'
import ProgressBar from './ProgressBar'
import clsx from 'clsx'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import dayjs from 'dayjs'

type HabitDayProps = {
  date: Date
  completed?: number
  amount?: number
}

type ColorMap = {
  [key: string]: string
}

function HabitDay({ completed = 0, amount = 0, date }: HabitDayProps) {
  const completedPercentage: number =
    completed > amount
      ? 100
      : amount > 0
      ? Math.round(completed / amount) * 100
      : 0

  const roundedPercentage = completedPercentage - (completedPercentage % 20)

  const commonClasses = 'w-10 h-10 rounded-lg'

  const colorMap: ColorMap = {
    0: 'bg-zinc-900 border-2 border-zinc-800',
    20: 'bg-violet-900 border-violet-700',
    40: 'bg-violet-800 border-violet-600',
    60: 'bg-violet-700 border-violet-500',
    80: 'bg-violet-600 border-violet-400',
    100: 'bg-violet-500 border-violet-300'
  }

  const dayAndMonth = dayjs(date).format('DD/MM')
  const dayOfWeek = dayjs(date).format('dddd')
  const formattedDay = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx(commonClasses, colorMap[roundedPercentage])}
      />
      <Popover.Portal>
        <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col '>
          <span className='font-semibold text-zinc-400'>{formattedDay}</span>
          <span className='mt-1 font-extrabold leading-tight text-3xl'>
            {dayAndMonth}
          </span>
          <ProgressBar progress={completedPercentage} />
          <div className='flex flex-col gap-3'>
            <Checkbox.Root className='flex items-center gap-3 group'>
              <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500 '>
                <Checkbox.Indicator>
                  <Check size={20} className='text-white' />
                </Checkbox.Indicator>
              </div>
              <span className='font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400'>
                Beber 2L de água
              </span>
            </Checkbox.Root>
            <Checkbox.Root className='flex items-center gap-3 group'>
              <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500 '>
                <Checkbox.Indicator>
                  <Check size={20} className='text-white' />
                </Checkbox.Indicator>
              </div>
              <span className='font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400'>
                Beber 2L de água
              </span>
            </Checkbox.Root>
            <Checkbox.Root className='flex items-center gap-3 group'>
              <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500 '>
                <Checkbox.Indicator>
                  <Check size={20} className='text-white' />
                </Checkbox.Indicator>
              </div>
              <span className='font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400'>
                Beber 2L de água
              </span>
            </Checkbox.Root>
          </div>
          <Popover.Arrow height={8} width={16} className='fill-zinc-900' />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default HabitDay
