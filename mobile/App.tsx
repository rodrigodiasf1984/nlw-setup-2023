import './src/lib/dayjs'
import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter'

import * as Notifications from 'expo-notifications'

import { useFonts } from 'expo-font'
import { StatusBar, TouchableOpacity, Text } from 'react-native'
import { Loading } from './src/components'
import { Routes } from './src/routes'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: true
  })
})

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  })

  if (!fontsLoaded) return <Loading />

  async function getScheduledNotifications() {
    const notifications =
      await Notifications.getAllScheduledNotificationsAsync()
    console.log(notifications)
  }

  async function scheduleNotification() {
    const trigger = new Date(Date.now())
    trigger.setMinutes(trigger.getHours() + 1)

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Hey, 🤗',
        body: 'Está na hora de cuidar molhar suas plantinhas.'
      },
      trigger
    })
  }

  scheduleNotification()

  return (
    <>
      <Routes />
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />
    </>
  )
}
