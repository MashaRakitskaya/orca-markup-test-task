import React from 'react'
import copy from 'images/copy.svg'
import { Button, ButtonText, StyledSVG } from './CopyButton.styles'

const CopyButton = ({ ipAddressType }) => {
  return (
    <Button>
      <ButtonText>{ipAddressType}</ButtonText>
      <StyledSVG src={copy} alt="copy" />
    </Button>
  )
}

export default CopyButton
