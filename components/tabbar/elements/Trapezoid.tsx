import { Canvas, FitBox, LinearGradient, Path, rect, vec } from '@shopify/react-native-skia'
import React from 'react'
import { StyleSheet } from 'react-native'

type TrapezoidProps = {
    width: number
    height: number
}

const Trapezoid = ({ width, height }: TrapezoidProps) => {
  return (
    <Canvas style={{ width, height }}>
        <FitBox src={rect(0,0,266,100)} dst={rect(0, 0, width, height)}>
        <Path
            path="M112 0H154C186 0 195.501 24.1398 205.732 48.6985C216.325 74.1247 227 100 262 100H4C39 100 49.6753 74.1247 60.2677 48.6985C70.4988 24.1398 80 0 112 0Z"
            style={"fill"}
            color="#262C51"
        >
            <LinearGradient
                start={vec(width / 2, height)}
                end={vec(width / 2, 0)}
                colors={['#262C51', '#3E3F74']}
            />
        </Path>
        <Path
            path="M112 0.25H154C169.923 0.25 180.229 6.24992 187.838 15.3008C195.462 24.37 200.382 36.5041 205.502 48.7949C210.794 61.4986 216.125 74.3646 224.524 84.0479C231.574 92.1753 240.781 98.0562 253.919 99.75H12.0811C25.2186 98.0562 34.4259 92.1753 41.4756 84.0479C49.8748 74.3646 55.2058 61.4986 60.498 48.7949C65.6183 36.5041 70.5378 24.37 78.1621 15.3008C85.771 6.24992 96.0771 0.25 112 0.25Z"
            style={"stroke"}
            color="#7582F4"
            strokeWidth={0.5}
        />
        </FitBox>
    </Canvas>
  )
}

export default Trapezoid

const styles = StyleSheet.create({})
