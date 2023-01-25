import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import Logo from '../assets/logo.svg'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
  const { navigate } = useNavigation()
  return (
    <View className='w-full flex-row items-center justify-between'>
      <Logo />
      <TouchableOpacity
        onPress={() => navigate('CreateHabit')}
        activeOpacity={0.7}
        className='flex-row h-11 px-4 border border-violet-500 rounded-lg items-center '
      >
        <Feather name='plus' size={24} color={colors.violet[500]} />
        <Text className='text-white ml-3 font-semibold text-base'>Novo</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Header
