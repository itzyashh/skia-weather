import HomeBackground from '@/components/HomeBackground'
import Tabbar from '@/components/tabbar/Tabbar'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const Page = () => {
  return (
    <View style={styles.container}>
      <HomeBackground />
      <Tabbar />    
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})