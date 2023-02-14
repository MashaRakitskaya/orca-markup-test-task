import styled from 'styled-components'
import { mainFontColor, secondaryColor } from 'styles/variables.styles'

export const FileNameSizeContainer = styled.div`
  display: flex;
  gap: 4px;
`

export const FileName = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${mainFontColor};
  margin: 0px;
  max-width: ${({ secondary }) => (secondary ? '84px' : '')};
  white-space: nowrap;
  overflow: ${({ secondary }) => (secondary ? 'hidden' : 'visible')};
  text-overflow: ${({ secondary }) => (secondary ? 'ellipsis' : '')};
`

export const FileSize = styled.span`
  color: ${secondaryColor};
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`
