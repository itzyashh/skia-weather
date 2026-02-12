import React from 'react'
import { StyleSheet, useWindowDimensions, View } from 'react-native'
import CircleButton from './elements/CircleButton'
import Trapezoid from './elements/Trapezoid'
import List from './icons/List'
import Map from './icons/Map'

const TabbarItems = () => {
    const {width, height } = useWindowDimensions()
    const TrapezoidHeight = height * 0.12
    const TrapezoidWidth = width * 0.68
    const circleRadius = (TrapezoidWidth*0.22)/2
    return (
        <View style={styles.container}>
            <Map />
            <Trapezoid width={TrapezoidWidth} height={TrapezoidHeight}/>
            <CircleButton />
            <List />
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