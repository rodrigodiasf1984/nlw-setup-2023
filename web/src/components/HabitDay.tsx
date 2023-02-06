import * as Popover from '@radix-ui/react-popover'
import ProgressBar from './ProgressBar'
import clsx from 'clsx'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import dayjs from 'dayjs'
import { HabitsList } from './HabitsList'
import { useState } from 'react'

type HabitDayProps = {
  date: Date
  defaultCompleted?: number
  amount?: number
}

type ColorMap = {
  [key: string]: string
}

function HabitDay({ defaultCompleted = 0, amount = 0, date }: HabitDayProps) {
  const [completed, setCompleted] = useState(defaultCompleted)

  const completedPercentage: number =
    amount > 0 ? Math.round((completed / amount) * 100) : 0
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

  const todayClasse = 'border-white border-4'

  const today = dayjs().startOf('day').toDate()
  const isCurrentDay = dayjs(date).isSame(today, 'day')

  const dayAndMonth = dayjs(date).format('DD/MM')
  const dayOfWeek = dayjs(date).format('dddd')
  const formattedDay = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)

  const handleCompletedChanged = (completed: number) => {
    setCompleted(completed)
  }

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx(
          commonClasses,
          colorMap[roundedPercentage],
          isCurrentDay && todayClasse
        )}
      />
      <Popover.Portal>
        <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-background'>
          <span className='font-semibold text-zinc-400'>{formattedDay}</span>
          <span className='mt-1 font-extrabold leading-tight text-3xl'>
            {dayAndMonth}
          </span>
          <ProgressBar progress={completedPercentage} />
          <HabitsList date={date} onCompletedChanged={handleCompletedChanged} />
          <Popover.Arrow height={8} width={16} className='fill-zinc-900' />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default HabitDay
