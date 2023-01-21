import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const WEEK_DAYS = 7
const SCREEN_HOZIONTAL_PADDING = (32 * 2) / 5
export const DAY_MARGIN_BETWEEN = 8
export const DAY_SIZE =
  Dimensions.get('screen').width / WEEK_DAYS - (SCREEN_HOZIONTAL_PADDING + 5)

const HabitDay = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className='bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 '
      style={{
        width: DAY_SIZE,
        height: DAY_SIZE
      }}
    />
  )
}

export default HabitDay