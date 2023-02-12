import React from 'react'
import { ButtonStyled } from './Button.styles'

const Button = ({ buttonText, secondary = false }) => {
  return <ButtonStyled secondary={secondary}>{buttonText}</ButtonStyled>
}

export default Button
