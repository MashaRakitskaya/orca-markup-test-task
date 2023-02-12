import React from 'react'
import copy from 'images/copy.svg'
import SVG from 'react-inlinesvg'
import { Button, ButtonText } from './CopyButton.styles'

const CopyButton = ({ ipAddressType }) => {
  return (
    <Button>
      <ButtonText>{ipAddressType}</ButtonText>
      <SVG src={copy} alt="copy" />
    </Button>
  )
}

export default CopyButton
