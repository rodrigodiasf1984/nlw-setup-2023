import { View, Text, ScrollView } from 'react-native'
import { DAY_SIZE } from '../components/HabitDay'
import { Header, HabitDay, Loading } from '../components'
import { generateDatesFromYearBeginning } from '../utils/generateDatesFromYearBeginning'
import { useNavigation } from '@react-navigation/native'
import { api } from '../lib/axios'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const datesFromYearStart = generateDatesFromYearBeginning()
const minimumSummaryDatesSize = 18 * 5
const amountOfDatesToFill = minimumSummaryDatesSize - datesFromYearStart.length

type Summary = Array<{
  id: string
  date: string
  amount: number
  completed: number
}>

const Home = () => {
  const { navigate } = useNavigation()
  const [loading, setLoading] = useState(false)
  const [summary, setSummary] = useState<Summary | null>(null)

  const getHabits = async () => {
    try {
      setLoading(true)
      const response = await api.get('/summary')
      setSummary(response.data)
    } catch (error) {
      console.log('✅ ~  getHabits catch error', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getHabits()
  }, [])

  if (loading) {
    return <Loading />
  }

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
        {summary && (
          <View className='flex-row flex-wrap'>
            {datesFromYearStart.map((date) => {
              const dayWithHabits = summary?.find((day) => {
                return dayjs(date).isSame(day.date, 'day')
              })
              return (
                <HabitDay
                  amountOfHabits={dayWithHabits?.amount}
                  amountCompleted={dayWithHabits?.completed}
                  date={date}
                  key={date.toISOString()}
                  onPress={() =>
                    navigate('habit', { date: date.toISOString() })
                  }
                />
              )
            })}
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
        )}
      </ScrollView>
    </View>
  )
}

export default Home
