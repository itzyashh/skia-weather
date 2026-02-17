import { BlurView } from 'expo-blur'
import React from 'react'
import { StyleSheet, useWindowDimensions } from 'react-native'
import ArcComponent from './elements/ArcComponent'
import TabbarItems from './elements/TabbarItems'

const WeatherTabBar = () => {

  const tabbarHeight = 88
  const { width } = useWindowDimensions()

  return (
    <BlurView intensity={55}
      tint="dark"
      style={styles(tabbarHeight).container}>
      <ArcComponent height={tabbarHeight} width={width} />
      <TabbarItems />
    </BlurView>
  )
}

export default WeatherTabBar

const styles = (tabbarHeight?: number) => StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    bottom: 0,
    height: tabbarHeight,
    top: 'auto',
  }
})