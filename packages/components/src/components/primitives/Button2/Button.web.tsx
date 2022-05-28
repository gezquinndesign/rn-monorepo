import React, { CSSProperties } from 'react'
import { ButtonPropsInterface } from './props.interface'
import { Button } from 'native-base'
import { Style } from './style'

export default function ButtonWebComponent(props: ButtonPropsInterface) {
  return (
    // <button
    //   style={
    //     { ...Style.button, ...Style.buttonText } as unknown as CSSProperties
    //   }
    //   onClick={props.onClick}
    // >
    //   WEB {props.text}
    // </button>
        <Button
      style={
        { ...Style.button } as unknown as CSSProperties
      }
      _text={Style.buttonText }
        onPress={props.onClick}
        activeOpacity={0.8}
      >WEB {props.text}
      </Button>
  )
}
