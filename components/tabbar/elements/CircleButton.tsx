import { Canvas, Circle } from '@shopify/react-native-skia'
import React from 'react'
import { StyleSheet } from 'react-native'

type CircleButtonProps = {
  radius: number
}

const CircleButton = ({ radius }: CircleButtonProps) => {
  return (
    <Canvas>
      <Circle cx={radius} cy={radius} r={radius} color="red" />
    </Canvas>
  )
}

export default CircleButton

const styles = StyleSheet.create({})