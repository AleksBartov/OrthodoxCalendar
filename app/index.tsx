import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia'

const index = () => {

  const {width, height} = useWindowDimensions()
  return (
    <Canvas style={{flex:1}}>
      <Rect width={width} height={height} >
        <LinearGradient start={vec(0,0)} end={vec(width, height)} colors={['cyan', 'blue']} />
      </Rect>
    </Canvas>
  )
}

export default index
