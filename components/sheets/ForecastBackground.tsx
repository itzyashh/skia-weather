import { Canvas, LinearGradient, RoundedRect, vec } from '@shopify/react-native-skia';
import { BlurView } from 'expo-blur';
import React from 'react';
import { StyleSheet } from 'react-native';

interface ForecastBackgroundProps {
  height: number
  width: number
  cornerRadius: number
}

const ForecastBackground = ({ height, width, cornerRadius }: ForecastBackgroundProps) => {
  return (
    <BlurView intensity={55}
    tint="dark"
    style={{ ...StyleSheet.absoluteFillObject, borderRadius: cornerRadius, overflow: 'hidden' }}>
        <Canvas style={{ flex: 1 }}>
          <RoundedRect
            x={0}
            y={0}
            width={width}
            height={height}
            r={cornerRadius}
          >
            <LinearGradient
              start={vec(0, 0)}
              end={vec(width, width)}
              colors={['#2E335A42', '#1C1B3342']}
              positions={[-0.04, 0.94]}
            />
            {/* <Line
              p1={vec(0, 0)}
              p2={vec(width, width)}
              color="red"
              strokeWidth={10}
            /> */}
          </RoundedRect>
        </Canvas>
    </BlurView>
  )
}

export default ForecastBackground

const styles = StyleSheet.create({

})