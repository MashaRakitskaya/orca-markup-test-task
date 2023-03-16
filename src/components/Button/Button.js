import React from 'react'
import { ButtonStyled } from './Button.styles'
import PropTypes from 'prop-types'

const Button = ({
  buttonText,
  border,
  background,
  fontColor,
  boxShadow,
  isBigPudding,
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

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  border: PropTypes.string,
  background: PropTypes.string,
  fontColor: PropTypes.string,
  boxShadow: PropTypes.string,
  isBigPudding: PropTypes.bool,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  isBigPudding: false,
}

export default Button
