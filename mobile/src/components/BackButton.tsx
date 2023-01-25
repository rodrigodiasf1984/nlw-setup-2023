import { TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { useNavigation } from '@react-navigation/native'

const BackButton = () => {
  const { goBack } = useNavigation()
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
      <Feather name='arrow-left' size={24} color={colors.zinc[400]} />
    </TouchableOpacity>
  )
}

export default BackButton
