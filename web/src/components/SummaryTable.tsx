import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { generateDatesFromYearBeginning } from '../utils/generate-dates-from-year-beginning'
import HabitDay from './HabitDay'

type Summary = Array<{
  id: string
  amount: number
  completed: number
  date: string
}>

export const SummaryTable = () => {
  const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
  const summaryDates = generateDatesFromYearBeginning()
  const minimumSummaryDates = 18 * 7
  const amountOfDatesToFill = minimumSummaryDates - summaryDates.length
  const [summary, setSummary] = useState<Summary>([])

  useEffect(() => {
    const getSummary = async () => {
      api.get('/summary').then((res) => {
        setSummary(res.data)
      })
    }
    return () => {
      getSummary()
    }
  }, [])

  return (
    <div className='w-full flex'>
      <div className='grid grid-rows-7 grid-flow-row gap-3'>
        {days.map((day, idx) => (
          <div
            key={`${day}-${idx}`}
            className='text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center'
          >
            {day}
          </div>
        ))}
      </div>
      <div className='grid grid-rows-7 grid-flow-col gap-3'>
        {summary.length > 0 &&
          summaryDates.map((date) => {
            const dayInSummary = summary.find((day) =>
              dayjs(date).isSame(day.date, 'day')
            )
            return (
              <HabitDay
                date={date}
                amount={dayInSummary?.amount || 0}
                defaultCompleted={dayInSummary?.completed || 0}
                key={date.toString()}
              />
            )
          })}
        {amountOfDatesToFill > 0 &&
          Array.from(Array(amountOfDatesToFill)).map((_, idx) => (
            <div
              key={idx}
              className='w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed'
            />
          ))}
      </div>
    </div>
  )
}
