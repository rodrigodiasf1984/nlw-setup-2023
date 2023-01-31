import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native'
import React, { useState } from 'react'
import { BackButton, Checkbox } from '../components'
import colors from 'tailwindcss/colors'
import { Feather } from '@expo/vector-icons'
import { api } from '../lib/axios'
import { useNavigation } from '@react-navigation/native'

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
  const [weekDays, setWeekDays] = useState<number[]>([])
  const [title, setTitle] = useState<string>('')
  const navigation = useNavigation()

  const handleToggleDay = (day: number) => {
    if (weekDays.includes(day)) {
      setWeekDays(weekDays.filter((selectedDay) => selectedDay !== day))
      return
    } else {
      setWeekDays([...weekDays, day])
    }
  }

  const handleCreateNewHabit = async () => {
    try {
      if (!title.trim()) {
        Alert.alert('Opa!', 'Você precisa informar o nome do hábito')
      }
      if (weekDays.length === 0) {
        Alert.alert('Opa!', 'Você precisa informar a recorrência do hábito')
      }
      await api.post('/habits', {
        title,
        weekDays
      })
      setTitle('')
      setWeekDays([])
      Alert.alert('Sucesso!', 'Hábito criado com sucesso')
      navigation.navigate('home')
    } catch (error) {
      Alert.alert('Opa!', 'Ocorreu um erro ao criar o hábito')
      console.log('✅ ~  error', error)
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
          className='h-12 pl-4 rounded-lg mt-3 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-green-600'
          onChangeText={setTitle}
          value={title}
        />
        <Text className='font-semibold  mt-4 mb-3 text-white text-base'>
          Qual a recorrência
        </Text>
        {availableDays.map((day, index) => (
          <Checkbox
            key={day}
            title={day}
            checked={weekDays.includes(availableDays.indexOf(day))}
            onPress={() => handleToggleDay(index)}
          />
        ))}
        <TouchableOpacity
          activeOpacity={0.7}
          className='w-full h-14 flex-row items-center justify-center mt-2 bg-green-600 rounded-md'
          onPress={handleCreateNewHabit}
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
