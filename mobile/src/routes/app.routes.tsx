import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CreateHabit, Habit, Home } from '../screens'

const { Navigator, Screen } = createNativeStackNavigator()

const AppRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name='Home' component={Home} />
      <Screen name='Habit' component={Habit} />
      <Screen name='CreateHabit' component={CreateHabit} />
    </Navigator>
  )
}

export default AppRoutes
