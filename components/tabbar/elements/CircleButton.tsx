import { Canvas, Circle, LinearGradient, Shadow, vec } from '@shopify/react-native-skia'
import React from 'react'
import { StyleSheet } from 'react-native'

const CircleButton = ({ radius }: { radius: number }) => {
    const diameter = radius * 2
  return (
    <Canvas style={{ width: diameter, height: diameter }}>
      <Circle cx={radius} cy={radius} r={radius} >
        <LinearGradient
            start={vec(0, 0)}
            end={vec(diameter, diameter)}
            colors={['#F5F5F9', '#DADFE7']}
        />
        <Shadow dx={1} dy={1} blur={0.5} color="white" inner/>
      </Circle>
    </Canvas>
  )
}

export default CircleButton

const styles = StyleSheet.create({})