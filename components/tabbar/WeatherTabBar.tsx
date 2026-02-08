import React from 'react'
import { StyleSheet, useWindowDimensions, View } from 'react-native'
import ArcComponent from './elements/ArcComponent'
import TabbarItems from './elements/TabbarItems'

const WeatherTabBar = () => {

    const tabbarHeight = 88
    const { width } = useWindowDimensions()

  return (
    <View style={styles(tabbarHeight).container}>
        <ArcComponent height={tabbarHeight} width={width} />
        <TabbarItems />
    </View>
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