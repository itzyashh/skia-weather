import HomeBackground from '@/components/HomeBackground'
import ForecastSheet from '@/components/sheets/ForecastSheet'
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
        <ForecastSheet />
        <WeatherTabBar />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}

export default Page