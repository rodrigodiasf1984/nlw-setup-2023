export const SummaryTable = () => {
  const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
  return (
    <div className='w-full flex'>
      <div className='grid grid-rows-7 grid-flow-row gap-3'>
        {days.map((day, idx) => (
          <div
            key={idx}
            className='text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center'
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  )
}
