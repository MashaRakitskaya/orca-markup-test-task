import React from 'react'
import { ButtonStyled } from './Button.styles'

const Button = ({
  buttonText,
  border,
  background,
  fontColor,
  boxShadow,
  isBigPudding = false,
  onClick,
}) => {
  return (
    <ButtonStyled
      onClick={onClick}
      background={background}
      border={border}
      fontColor={fontColor}
      boxShadow={boxShadow}
      isBigPudding={isBigPudding}
    >
      {buttonText}
    </ButtonStyled>
  )
}

export default Button
