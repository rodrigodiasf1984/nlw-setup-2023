import { View, Text, ScrollView } from 'react-native'
import HabitDay, { DAY_SIZE } from '../components/HabitDay'
import Header from '../components/Header'
import { generateDatesFromYearBeginning } from '../utils/generateDatesFromYearBeginning'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const datesFromYearStart = generateDatesFromYearBeginning()
const minimumSummaryDatesSize = 18 * 5
const amountOfDatesToFill = minimumSummaryDatesSize - datesFromYearStart.length

export function Home() {
  return (
    <View className='flex-1 bg-background px-8 pt-16'>
      <Header />
      <View className='flex-row mt-6 mb-2'>
        {weekDays.map((day, i) => (
          <Text
            style={{ width: DAY_SIZE }}
            className='text-zinc-400 text-xl font-bold text-center mx-1'
            key={`${day}-${i}`}
          >
            {day}
          </Text>
        ))}
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className='flex-row flex-wrap'>
          {datesFromYearStart.map((date, i) => (
            <HabitDay key={date.toString()} />
          ))}
          {amountOfDatesToFill > 0 &&
            Array.from({ length: amountOfDatesToFill }).map((_, i) => (
              <View
                key={i}
                className='bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40'
                style={{
                  width: DAY_SIZE,
                  height: DAY_SIZE
                }}
              />
            ))}
        </View>
      </ScrollView>
    </View>
  )
}
