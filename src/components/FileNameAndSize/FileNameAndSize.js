import React from 'react'
import { Name, Container, Size } from './FileNameAndSize.styles'
import PropTypes from 'prop-types'

const FileNameAndSize = ({ fileName, fileSize, secondary }) => {
  return (
    <Container>
      <Name secondary={secondary}>{fileName}</Name>
      <Size>({fileSize})</Size>
    </Container>
  )
}

FileNameAndSize.propTypes = {
  fileName: PropTypes.string.isRequired,
  fileSize: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
}

FileNameAndSize.defaultProps = { secondary: false }

export default FileNameAndSize
