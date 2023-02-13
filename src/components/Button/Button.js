import React from 'react'
import { ButtonStyled } from './Button.styles'

const Button = ({ buttonText, secondary = false, isBigPudding = false, onClick }) => {
  return (
    <ButtonStyled onClick={onClick} secondary={secondary} isBigPudding={isBigPudding}>
      {buttonText}
    </ButtonStyled>
  )
}

export default Button
