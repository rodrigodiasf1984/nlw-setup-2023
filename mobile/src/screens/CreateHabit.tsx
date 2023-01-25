import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'
import { BackButton, Checkbox } from '../components'
import colors from 'tailwindcss/colors'
import { Feather } from '@expo/vector-icons'

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
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />
        <Text className='mt-6 text-white font-extrabold text-3xl'>
          Criar Hábito
        </Text>
        <Text className='mt-6 text-white font-semibold text-base'>
          Qual seu comprometimento?
        </Text>
        <TextInput
          placeholder='Digite o nome do hábito'
          placeholderTextColor={colors.zinc[400]}
          className='h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white focus:border-2 focus:border-green-600'
        />
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
        <TouchableOpacity
          activeOpacity={0.7}
          className='w-full h-14 flex-row items-center justify-center mt-2 bg-green-600 rounded-md'
        >
          <Feather name='check' size={20} color={colors.white} />
          <Text className='ml-2 font-semibold text-white text-base'>
            Salvar
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default CreateHabit
