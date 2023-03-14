import styled from 'styled-components'
import { mainFontColor, mainFontStyles, secondaryColor } from 'styles/variables.styles'

export const Container = styled.div`
  display: flex;
  gap: 4px;
`

export const Name = styled.p`
  ${mainFontStyles};
  color: ${mainFontColor};
  margin: 0px;
  max-width: ${({ secondary }) => (secondary ? '84px' : '')};
  white-space: nowrap;
  overflow: ${({ secondary }) => (secondary ? 'hidden' : 'visible')};
  text-overflow: ${({ secondary }) => (secondary ? 'ellipsis' : '')};
`

export const Size = styled.span`
  color: ${secondaryColor};
  ${mainFontStyles};
`
