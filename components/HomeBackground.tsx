import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia'
import React from 'react'
import { Image, ImageBackground, StyleSheet, useWindowDimensions } from 'react-native'

const HomeBackground = () => {
  const { width, height } = useWindowDimensions()
  const houseHeight = height * 0.46
  const smokeHeight = height * 0.59
  return (
    <>
      <Canvas style={{ width: width, height: height }}>
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
        style={[styles.background, { ...StyleSheet.absoluteFillObject }]}
      >
        <Canvas style={{ width: width, height: smokeHeight, ...StyleSheet.absoluteFillObject, top: 'auto' }}>
          <Rect x={0} y={0} width={width} height={smokeHeight}>
            <LinearGradient
              start={vec(width / 2, 0)}
              end={vec(width / 2, smokeHeight)}
              colors={['rgba(58, 63, 84, 0.12)', 'rgba(58, 63, 84,1)']}
              positions={[0.2, 0.6]}
            />
          </Rect>
        </Canvas>
        <Image source={require('@/assets/images/house.png')}
          style={[styles.house, { width, height: houseHeight, top: height * 0.36 }]} />

      </ImageBackground>


    </>
  )
}

export default HomeBackground

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
  },
  background: {
    height: '100%',
  },
  house: {
    ...StyleSheet.absoluteFillObject,
    top: 'auto'
  }
})