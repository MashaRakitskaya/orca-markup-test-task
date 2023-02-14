import styled from 'styled-components'
import {
  mainColor,
  mainButtonFontColor,
  mainFontColor,
  mainBoxShadow,
  mainBorder,
  mainFontStyles,
} from 'styles/variables.styles'

export const ButtonStyled = styled.button`
  border: ${({ secondary }) => (secondary ? `${mainBorder}` : 'none')};
  background: ${({ secondary }) => (secondary ? 'transparent' : `${mainColor}`)};
  border-radius: 4px;
  ${mainFontStyles};
  color: ${({ secondary }) => (secondary ? `${mainFontColor}` : `${mainButtonFontColor}`)};
  padding: 6px 8px;
  padding: ${({ isBigPudding }) => (isBigPudding ? '6px 32px' : '6px 8px')};
  cursor: pointer;

  &:hover {
    box-shadow: ${({ secondary }) => (secondary ? '' : `${mainBoxShadow}`)};
  }
`
