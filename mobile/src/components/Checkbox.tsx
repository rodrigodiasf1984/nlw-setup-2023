import {
  TouchableOpacity,
  View,
  Text,
  TouchableOpacityProps
} from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'

interface CheckboxProps extends TouchableOpacityProps {
  checked?: boolean
  title: string
}

const Checkbox = ({ checked = false, title, ...rest }: CheckboxProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className='flex-row mb-2 items-center'
      {...rest}
    >
      {checked ? (
        <View className='h-8 w-8 bg-green-500 rounded-lg items-center justify-center'>
          <Feather name='check' size={20} color={colors.white} />
        </View>
      ) : (
        <View className='h-8 w-8 bg-zinc-900 rounded-lg' />
      )}
      <Text className='ml-3 text-white text-base'>{title}</Text>
    </TouchableOpacity>
  )
}

export default Checkbox
