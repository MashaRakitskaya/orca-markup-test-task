import React from 'react'
import { FileName, FileNameSizeContainer, FileSize } from './FileNameAndSize.styles'

const FileNameAndSize = ({ fileName, fileSize, secondary = false }) => {
  return (
    <FileNameSizeContainer>
      <FileName secondary={secondary}>{fileName}</FileName>
      <FileSize> ({fileSize})</FileSize>
    </FileNameSizeContainer>
  )
}

export default FileNameAndSize
