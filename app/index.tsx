import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia'
import React from 'react'
import { Image, ImageBackground, StyleSheet, useWindowDimensions } from 'react-native'

const Page = () => {
  const { width, height } = useWindowDimensions()
  const smokeHeight = height * 0.6
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
        <Canvas style={{ height: smokeHeight, ...StyleSheet.absoluteFillObject, bottom: 0, top: 'auto' }}>
          <Rect x={0} y={0} width={width} height={smokeHeight}>
            <LinearGradient
              start={vec(width/2, 0)}
              end={vec(width/2, smokeHeight)}
              colors={['#3A3F5400', '#3A3F54']}
              positions={[-0.02, 0.54]}
            />
          </Rect>
            {/* <Line
              p1={vec(width/2, 0)}
              p2={vec(width/2, smokeHeight)}
              color="green"
              strokeWidth={10}
            /> */}
        </Canvas>

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