import { Text, View } from 'react-native'
import React from 'react'

interface ProgressBarProps {
  progress?: number
}

const ProgressBar = ({ progress = 0 }: ProgressBarProps) => {
  return (
    <View className='w-full h-3 rounded-xl bg-zinc-700 mt-4'>
      <View
        className='h-3 rounded-xl bg-violet-600'
        style={{ width: `${progress}%` }}
      ></View>
    </View>
  )
}

export default ProgressBar
