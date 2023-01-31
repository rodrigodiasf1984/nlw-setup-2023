import axios from 'axios'
import { Platform } from 'react-native'

let baseURL = ''
if (Platform.OS === 'ios') {
  baseURL = 'http://localhost:3333'
} else {
  baseURL = 'http://192.168.5.95:19000:3333'
}

export const api = axios.create({
  baseURL: baseURL
})
