import { ScrollView, View } from 'react-native'
import React from 'react'
import { BackButton } from '../components'

const CreateHabit = () => {
  return (
    <View className='flex-1 bg-background px-8 pt-16'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackButton />
      </ScrollView>
    </View>
  )
}

export default CreateHabit
