import { Canvas, FitBox, LinearGradient, Path, rect, vec } from '@shopify/react-native-skia'
import React from 'react'
import { StyleSheet, useWindowDimensions } from 'react-native'

const Trapezoid = () => {
    const { height, width } = useWindowDimensions()
    const TrapezoidHeight = height * 0.12
    const TrapezoidWidth = width * 0.68
  return (
    <Canvas style={{width: TrapezoidWidth, height: TrapezoidHeight}}>
        <FitBox src={rect(0, 0, 266, 100)} dst={rect(0, 0, TrapezoidWidth, TrapezoidHeight)}>
        <Path
            path={'M112 0H154C186 0 195.501 24.1398 205.732 48.6985C216.325 74.1247 227 100 262 100H4C39 100 49.6753 74.1247 60.2677 48.6985C70.4988 24.1398 80 0 112 0Z'}
            style={'fill'}
            >
                <LinearGradient
                    start={vec(TrapezoidWidth/2, TrapezoidHeight)}
                    end={vec(TrapezoidWidth/2, 0)}
                    colors={['#262C51', '#3E3F74']}
                />
            </Path>
            <Path
                path={'M112 0.25H154C169.923 0.25 180.229 6.24992 187.838 15.3008C195.462 24.37 200.382 36.5041 205.502 48.7949C210.794 61.4986 216.125 74.3646 224.524 84.0479C231.574 92.1753 240.781 98.0562 253.919 99.75H12.0811C25.2186 98.0562 34.4259 92.1753 41.4756 84.0479C49.8748 74.3646 55.2058 61.4986 60.498 48.7949C65.6183 36.5041 70.5378 24.37 78.1621 15.3008C85.771 6.24992 96.0771 0.25 112 0.25Z'}
                style={'stroke'}
                strokeWidth={0.5}
                color={'rgba(117, 130, 244, 0.5)'}
                />
                
                </FitBox>
    </Canvas>
  )
}

export default Trapezoid

const styles = StyleSheet.create({})

{/* <svg width="266" height="100" viewBox="0 0 266 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_2_1491)">
<path d="M112 0H154C186 0 195.501 24.1398 205.732 48.6985C216.325 74.1247 227 100 262 100H4C39 100 49.6753 74.1247 60.2677 48.6985C70.4988 24.1398 80 0 112 0Z" fill="url(#paint0_linear_2_1491)"/>
<path d="" stroke="#7582F4" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
<defs>

<linearGradient id="paint0_linear_2_1491" x1="183.615" y1="100" x2="183.615" y2="0" gradientUnits="userSpaceOnUse">
<stop stop-color="#262C51"/>
<stop offset="1" stop-color="#3E3F74"/>
</linearGradient>
</defs>
</svg> */}
