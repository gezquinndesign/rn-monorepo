import React, { CSSProperties } from 'react'
import { ButtonPropsInterface } from './props.interface'
import { Button } from 'native-base'
import { Style } from './style'

export default function ButtonWebComponent({
  text,
  onClick,
  color,
  textColor,
  ...restProps
}: ButtonPropsInterface) {
  return (
    <Button
      {...restProps}
      style={{ ...Style.button } as unknown as CSSProperties}
      _text={Style.buttonText}
      onPress={onClick}
      activeOpacity={0.8}
    >
      WEB {text}
    </Button>
  )
}
