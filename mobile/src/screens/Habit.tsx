import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { BackButton, ProgressBar } from '../components'
import dayjs from 'dayjs'

interface Params {
  date: string
}

const Habit = () => {
  const route = useRoute()
  const { date } = route.params as Params
  const formattedWeekDay = dayjs(date).format('dddd')
  const formattedDate = dayjs(date).format('DD/MM')

  return (
    <View className='flex-1 bg-background px-8 pt-16'>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />
        <Text className='mt-6 text-zinc-400 font-semibold text-base lowercase'>
          {formattedWeekDay}
        </Text>
        <Text className='text-white font-extrabold text-3xl'>
          {formattedDate}
        </Text>
        <ProgressBar progress={50} />
      </ScrollView>
    </View>
  )
}

export default Habit
