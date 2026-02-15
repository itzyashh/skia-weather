import HomeBackground from '@/components/HomeBackground'
import WeatherTabBar from '@/components/tabbar/WeatherTabBar'
import Weather from '@/components/Weather'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'


const Page = () => {
  return (
    <SafeAreaProvider> 
      <GestureHandlerRootView style={{ flex: 1 }}>
        <HomeBackground /> 
        <Weather />
        <WeatherTabBar />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}

export default Page