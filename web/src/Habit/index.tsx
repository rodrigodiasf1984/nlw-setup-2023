import React from 'react'

type HabitProps = {
  completed: number
}

function Habit({ completed }: HabitProps) {
  return <p>Habits {completed}</p>
}

export default Habit
