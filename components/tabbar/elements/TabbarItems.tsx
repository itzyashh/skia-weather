import React from 'react'
import { Pressable, StyleSheet, useWindowDimensions, View } from 'react-native'
import ListIcon from '../icons/ListIcon'
import MapIcon from '../icons/MapIcon'
import CircleButton from './CircleButton'
import Trapezoid from './Trapezoid'

const TabbarItems = () => {
  const { width, height } = useWindowDimensions()

  const trapezoidWidth = width * 0.68
  const trapezoidHeight = height * 0.12
  const circleRadius = (trapezoidHeight * 0.55) / 2
  const circleDiameter = circleRadius * 2

  const circleCenterX = width / 2 - circleRadius

  return (
    <View style={styles.container}>
      <MapIcon />
      <Trapezoid width={trapezoidWidth} height={trapezoidHeight} />
      <Pressable style={{ ...StyleSheet.absoluteFillObject, left: circleCenterX, top: trapezoidHeight * 0.12, width: circleDiameter, height: circleDiameter }}>
        {({ pressed }) => (
          <CircleButton radius={circleRadius} diameter={circleDiameter} pressed={pressed} />
        )}
      </Pressable>
      <ListIcon />
    </View>
  )
}

export default TabbarItems

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 32,
  }
})