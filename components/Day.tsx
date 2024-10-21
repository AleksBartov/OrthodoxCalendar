import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Day = ({name, date}) => {
  return (
    <View style={styles.box}>
          <Text>
            {name}
          </Text>
          <Text>
            {date}
          </Text>
        </View>
  )
}

export default Day

const styles = StyleSheet.create({
    box: {
  backgroundColor: 'red'
    }
})