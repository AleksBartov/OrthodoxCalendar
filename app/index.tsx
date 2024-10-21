import { View, Text, useWindowDimensions, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia'
import Day from '@/components/day'
import { Days } from '@/constants/Days'

const index = () => {

  const {width, height} = useWindowDimensions()
  return (
    <>
    <Canvas style={{flex:1}}>
      <Rect width={width} height={height} >
        <LinearGradient start={vec(0,0)} end={vec(width, height)} colors={['#FBEAEB', '#2F3C7E']} />
      </Rect>
    </Canvas>
    <View style={{position: 'absolute', top: 150}}>
      <ScrollView horizontal>
        {Days.map((d, i)=>{
          return <Day key={i} name={d.name} date={d.date} />
        })}
      </ScrollView>
    </View>
    </>
    
  )
}

export default index
