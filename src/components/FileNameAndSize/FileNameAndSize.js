import React from 'react'
import { FileName, FileSize } from './FileNameAndSize.styles'

const FileNameAndSize = ({ fileName, fileSize }) => {
  return (
    <FileName>
      {fileName}
      <FileSize> {fileSize}</FileSize>
    </FileName>
  )
}

export default FileNameAndSize
