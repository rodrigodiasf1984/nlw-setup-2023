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
      <Screen name='home' component={Home} />
      <Screen name='habit' component={Habit} />
      <Screen name='createHabit' component={CreateHabit} />
    </Navigator>
  )
}

export default AppRoutes
