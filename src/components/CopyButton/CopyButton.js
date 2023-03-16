import React from 'react'
import copy from 'images/copy.svg'
import { Button, Text, StyledSVG } from './CopyButton.styles'
import PropTypes from 'prop-types'

const CopyButton = ({ ipAddressType }) => {
  return (
    <Button>
      <Text>{ipAddressType}</Text>
      <StyledSVG src={copy} alt="copy" />
    </Button>
  )
}

CopyButton.propTypes = {
  ipAddressType: PropTypes.string.isRequired,
}

export default CopyButton
