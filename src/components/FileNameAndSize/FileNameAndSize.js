import React from 'react'
import { Name, Container, Size } from './FileNameAndSize.styles'

const FileNameAndSize = ({ fileName, fileSize, secondary = false }) => {
  return (
    <Container>
      <Name secondary={secondary}>{fileName}</Name>
      <Size> ({fileSize})</Size>
    </Container>
  )
}

export default FileNameAndSize
