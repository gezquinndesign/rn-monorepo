import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ButtonPropsInterface } from './props.interface'
import { Button } from 'native-base'
import { Style } from './style'

const styles = StyleSheet.create(Style)

export default function ButtonNativeComponent({
  text,
  onClick,
  color,
  textColor,
}: ButtonPropsInterface) {
  return (
    <Button
        style={[styles.button, !!color && { backgroundColor: color }]}
        onPress={onClick}
        activeOpacity={0.8}

      >NATIVE {text}
      </Button>
  )
}
