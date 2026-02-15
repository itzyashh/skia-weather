import { DEGREE_SYMBOL } from '@/constants/weather'
import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const mockWeatherData = {
    city: 'New York',
    temperature: 20,
    highestTemperature: 25,
    lowestTemperature: 15,
    weatherDescription: 'Mostly clear'
}

const Weather = () => {
    const { height } = useWindowDimensions()
    const topMargin = height * 0.06

    return (
        <SafeAreaView style={[styles.container, { marginTop: topMargin }]}>
            <Text style={styles.city}>{mockWeatherData.city}</Text>
            <Text style={styles.temperature}>
                {mockWeatherData.temperature}{DEGREE_SYMBOL}
            </Text>
            <Text style={styles.description}>
                {mockWeatherData.weatherDescription}
            </Text>
            <View style={styles.highLowRow}>
                <Text style={styles.highLow}>
                    H:{mockWeatherData.highestTemperature}{DEGREE_SYMBOL}
                </Text>
                <Text style={styles.highLow}>
                    L:{mockWeatherData.lowestTemperature}{DEGREE_SYMBOL}
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default Weather

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    city: {
        fontSize: 34,
        color: 'white',
        fontFamily: 'System',
        fontWeight: '400',
        lineHeight: 41,
        letterSpacing: 0.4,
    },
    temperature: {
        fontSize: 96,
        color: 'white',
        fontFamily: 'System',
        fontWeight: '200',
        lineHeight: 104,
        letterSpacing: -2,
    },
    description: {
        fontSize: 20,
        color: 'rgba(235, 235, 245, 0.6)',
        fontWeight: '500',
        lineHeight: 24,
        letterSpacing: 0.3,
    },
    highLowRow: {
        flexDirection: 'row',
        gap: 6,
        marginTop: 2,
    },
    highLow: {
        fontSize: 20,
        color: 'white',
        fontWeight: '500',
        lineHeight: 24,
        letterSpacing: 0.3,
    },
})