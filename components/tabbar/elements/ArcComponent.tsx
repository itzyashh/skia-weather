import { Canvas, LinearGradient, Path, vec } from '@shopify/react-native-skia'
import React from 'react'
import { StyleSheet } from 'react-native'

type ArcComponentProps = {
    height: number
    width: number
}

const ArcComponent = ({ height, width }: ArcComponentProps) => {
    const arcPath = `M 0 0 Q ${width / 2} ${height / 2} ${width} 0
    L ${width} ${height} L 0 ${height}
    `
    const curvePath = `M 0 0 Q ${width / 2} ${height / 2} ${width} 0`
    return (
        <Canvas style={{ height, ...StyleSheet.absoluteFillObject }}>
            <Path path={curvePath} style="stroke"
                strokeWidth={0.5}
                color={'rgba(117, 130, 244, 0.50)'}
                strokeCap="round">
            </Path>
            <Path path={arcPath} >
                <LinearGradient
                    start={vec(width / 2, 0)}
                    end={vec(width / 2, height)}
                    colors={['#3A3A6A42', '#25244C42']}
                />
            </Path>
            {/* <Line p1={vec(width/2, 0)} p2={vec(width/2, height)} color="red" strokeWidth={10} /> */}
        </Canvas>
    )
}

export default ArcComponent

const styles = StyleSheet.create({
    canvas: {
    }
})