import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TouchableOpacityProps
} from 'react-native'
import React from 'react'
import clsx from 'clsx'
import dayjs from 'dayjs'

const WEEK_DAYS = 7
const SCREEN_HOZIONTAL_PADDING = (32 * 2) / 5
export const DAY_MARGIN_BETWEEN = 8
export const DAY_SIZE =
  Dimensions.get('screen').width / WEEK_DAYS - (SCREEN_HOZIONTAL_PADDING + 5)

interface HabitDayProps extends TouchableOpacityProps {
  amountOfHabits?: number
  amountCompleted?: number
  date: Date
}

type ColorMap = {
  [key: string]: string
}

const HabitDay = ({
  amountOfHabits = 0,
  amountCompleted = 0,
  date,
  ...rest
}: HabitDayProps) => {
  const completedPercentage: number =
    amountCompleted > amountOfHabits
      ? 100
      : amountOfHabits > 0
      ? Math.round(amountCompleted / amountOfHabits) * 100
      : 0

  const roundedPercentage = completedPercentage - (completedPercentage % 20)

  const commonClasses = 'rounded-lg border-2 m-1'

  const colorMap: ColorMap = {
    0: 'bg-zinc-900 border-2 border-zinc-800',
    20: 'bg-violet-900 border-violet-700',
    40: 'bg-violet-800 border-violet-600',
    60: 'bg-violet-700 border-violet-500',
    80: 'bg-violet-600 border-violet-400',
    100: 'bg-violet-500 border-violet-300'
  }
  const todayClasse = 'border-white border-4'

  const today = dayjs().startOf('day').toDate()
  const isCurrentDay = dayjs(date).isSame(today, 'day')

  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.7}
      className={clsx(
        commonClasses,
        colorMap[roundedPercentage],
        isCurrentDay && todayClasse
      )}
      style={{
        width: DAY_SIZE,
        height: DAY_SIZE
      }}
    />
  )
}

export default HabitDay
