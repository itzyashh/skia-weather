import { Canvas, LinearGradient, Path, vec } from '@shopify/react-native-skia'
import React from 'react'
import { StyleSheet, useWindowDimensions } from 'react-native'

type ArcPath = {
    tabbarHeight: number
}

const ArcComponent = ({ tabbarHeight }: ArcPath) => {
    const { width, height } = useWindowDimensions()
    const arcPath = `M 0 0 Q ${width / 2} ${tabbarHeight / 2} ${width} 0
    L ${width} ${tabbarHeight}
    L 0 ${tabbarHeight}
    Z
    `
    const curvePath = `M 0 0 Q ${width / 2} ${tabbarHeight / 2} ${width} 0`

    return (
        <Canvas style={[styles.canvas, { height: tabbarHeight, ...StyleSheet.absoluteFillObject }]}>
            <Path
                path={curvePath}
                style={'stroke'}
                strokeWidth={0.5}
                strokeCap={'round'}
                color={'rgba(117, 130, 244, 0.5)'}
            />
            <Path path={arcPath} >

                <LinearGradient
                    start={vec(0, 0)}
                    end={vec(width, 0)}
                    colors={['rgba(58, 58, 106, 0.26)', 'rgba(37, 36, 76, 0.26)']}
                />


            </Path>


        </Canvas>
    )
}

export default ArcComponent

const styles = StyleSheet.create({
    canvas: {

    }
})