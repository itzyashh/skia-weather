import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia'
import React from 'react'
import { Image, ImageBackground, StyleSheet, useWindowDimensions } from 'react-native'

const Page = () => {
  const { width, height } = useWindowDimensions()
  return (
    <>
      <Canvas style={styles.canvas}>
        <Rect x={0} y={0} width={width} height={height} >
          <LinearGradient
            start={vec(0, 0)}
            end={vec(width, height)}
            colors={['#2E335A', '#05C2CF']}
          />
        </Rect>
      </Canvas>
      <ImageBackground
        source={require('@/assets/images/background.png')}
        style={styles.background}
      >

          <Image source={require('@/assets/images/house.png')}
            style={[styles.house, { width, height: width }]} />

      </ImageBackground>
    </> 
  )
}

export default Page

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
  },
  background: {
    height: '100%',
  },
  house: {
    ...StyleSheet.absoluteFillObject,
    top: '36%',
  },
})