import dayjs from 'dayjs'

export function generateDatesFromYearBeginning() {
  const yearBeginning = dayjs().startOf('year')
  const dates = []
  const today = new Date()
  let compareDate = yearBeginning

  while (compareDate.isBefore(today)) {
    dates.push(compareDate.toDate())
    compareDate = compareDate.add(1, 'day')
  }
  return dates
}
