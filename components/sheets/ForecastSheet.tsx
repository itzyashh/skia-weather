import BottomSheet from '@gorhom/bottom-sheet';
import React, { useMemo } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import ForecastBackground from './ForecastBackground';

const ForecastSheet = () => {
  const { height, width } = useWindowDimensions()
  const snapPoints = useMemo(() => ['39%', '83%'], [])
  const firstSnapPoint = useMemo(() => height * parseFloat(snapPoints[0]), [height])
  const cornerRadius = 44
  return (
    <BottomSheet
      handleIndicatorStyle={{
        width: 48,
        height: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
      }}
      enableDynamicSizing={false}
      snapPoints={snapPoints}
      backgroundComponent={() => <ForecastBackground
        height={firstSnapPoint}
        width={width}
        cornerRadius={cornerRadius}
        />}

      >

    </BottomSheet>
  )
}

export default ForecastSheet

const styles = StyleSheet.create({})