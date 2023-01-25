import { generateDatesFromYearBeginning } from '../utils/generate-dates-from-year-beginning'
import HabitDay from './HabitDay'

export const SummaryTable = () => {
  const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
  const summaryDates = generateDatesFromYearBeginning()
  const minimumSummaryDates = 18 * 7
  const amountOfDatesToFill = minimumSummaryDates - summaryDates.length

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
        {summaryDates.map((date) => (
          <HabitDay
            amount={5}
            completed={Math.round(Math.random() * 5)}
            key={date.toString()}
          />
        ))}
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
