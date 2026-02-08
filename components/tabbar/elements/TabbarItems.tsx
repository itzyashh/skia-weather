import React from 'react'
import { StyleSheet, useWindowDimensions, View } from 'react-native'
import ListIcon from '../icons/ListIcon'
import MapIcon from '../icons/MapIcon'
import CircleButton from './CircleButton'
import Trapezoid from './Trapezoid'

const TabbarItems = () => {
    const { width, height } = useWindowDimensions()

    const trapezoidWidth = width * 0.68
    const trapezoidHeight = height * 0.12
    const circleRadius = (trapezoidWidth * 0.22)/2

  return (
    <View style={styles.container}>
        <MapIcon />
        <Trapezoid width={trapezoidWidth} height={trapezoidHeight} />
        <CircleButton radius={circleRadius} />
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