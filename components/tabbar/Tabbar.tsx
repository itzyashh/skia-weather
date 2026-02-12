import React from 'react'
import { StyleSheet, useWindowDimensions, View } from 'react-native'
import ArcComponent from './elements/ArcComponent'
import TabbarItems from './TabbarItems'

const Tabbar = () => {
    const { height } = useWindowDimensions()
    const tabbarHeight = height * 0.1
  return (
    <View style={[styles.container, { height: tabbarHeight }]}>
      <ArcComponent tabbarHeight={tabbarHeight} />
      <TabbarItems />
    </View>
  )
}

export default Tabbar

const styles = StyleSheet.create({
    container: {
        width: '100%',
        ...StyleSheet.absoluteFillObject,
        top: 'auto',
    }
})