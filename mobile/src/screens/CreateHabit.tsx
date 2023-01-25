import { ScrollView, View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { BackButton, Checkbox } from '../components'

const availableDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado'
]

const CreateHabit = () => {
  const [selectedDays, setSelectedDays] = useState<number[]>([])
  const handleToggleDay = (day: number) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((selectedDay) => selectedDay !== day))
      return
    } else {
      setSelectedDays([...selectedDays, day])
    }
  }
  return (
    <View className='flex-1 bg-background px-8 pt-16'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackButton />
        <Text className='mt-6 text-white font-extrabold text-3xl'>
          Criar Hábito
        </Text>
        <Text className='mt-6 text-white font-semibold text-base'>
          Qual seu comprometimento?
        </Text>
        <TextInput className='h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white focus:border-2 focus:border-green-600' />
        <Text className='font-semibold  mt-4 mb-3 text-white text-base'>
          Qual a recorrência
        </Text>
        {availableDays.map((day, index) => (
          <Checkbox
            key={day}
            title={day}
            checked={selectedDays.includes(availableDays.indexOf(day))}
            onPress={() => handleToggleDay(index)}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default CreateHabit
