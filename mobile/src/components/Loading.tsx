import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#09090A'
      }}
    >
      <ActivityIndicator color='#7C3AED' />
    </View>
  )
}

export default Loading
