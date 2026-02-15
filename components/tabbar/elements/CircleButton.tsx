import { Blur, Canvas, Circle, Group, LinearGradient, Path, Shadow, vec } from '@shopify/react-native-skia'
import React from 'react'
import { StyleSheet, useWindowDimensions } from 'react-native'

type CircleButtonProps = {
  radius: number
  diameter: number
  pressed: boolean
}

const PLUS_PATH = "M12.3477 24.207C11.1992 24.207 10.2695 23.2773 10.2695 22.1289C10.2695 20.9941 11.1992 20.0645 12.3477 20.0645H19.9355V12.4766C19.9355 11.3418 20.8516 10.3984 22 10.3984C23.1484 10.3984 24.0781 11.3418 24.0781 12.4766V20.0645H31.666C32.8008 20.0645 33.7305 20.9941 33.7305 22.1289C33.7305 23.2773 32.8008 24.207 31.666 24.207H24.0781V31.7949C24.0781 32.9297 23.1484 33.873 22 33.873C20.8516 33.873 19.9355 32.9297 19.9355 31.7949V24.207H12.3477Z"


const CircleButton = ({ radius, diameter, pressed }: CircleButtonProps) => {
  const { width, height } = useWindowDimensions()
  const iconScale = 0.8
  const scale = (diameter / 44) * iconScale
  const offset = (diameter - 44 * scale) / 2
  return (
    <Canvas style={{ width: diameter, height: diameter }}>
      <Circle cx={radius} cy={radius} r={radius} >
        <LinearGradient
          start={pressed ? vec(radius * 0.23, radius * 0.4) : vec(0, 0)}
          end={pressed ? vec(radius, diameter) : vec(diameter, diameter)}
          colors={pressed ? ['#BBBFC7', 'white'] : ['#F5F5F9', '#DADFE7']}

        />
        {pressed && <Blur blur={1} />}
        <Shadow dx={1} dy={1} blur={0.5} color="white" inner />
      </Circle>
      <Group transform={[{ translateX: offset }, { translateY: offset }, { scale }]}>
        <Path path={PLUS_PATH} style="fill" color="#48319D" />
      </Group>
    </Canvas>
  )
}

export default CircleButton

const styles = StyleSheet.create({})

