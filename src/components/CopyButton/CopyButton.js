import React from 'react'
import copy from 'images/copy.svg'
import { Button, Text, StyledSVG } from './CopyButton.styles'

const CopyButton = ({ ipAddressType }) => {
  return (
    <Button>
      <Text>{ipAddressType}</Text>
      <StyledSVG src={copy} alt="copy" />
    </Button>
  )
}

export default CopyButton
