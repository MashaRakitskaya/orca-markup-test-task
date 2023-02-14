import styled from 'styled-components'
import {
  mainColor,
  mainButtonFontColor,
  mainBoxShadow,
  mainFontStyles,
} from 'styles/variables.styles'

export const ButtonStyled = styled.button`
  border: ${({ border = 'none' }) => border};
  background: ${({ background = `${mainColor}` }) => background};
  border-radius: 4px;
  ${mainFontStyles};
  color: ${({ fontColor = `${mainButtonFontColor}` }) => fontColor};
  padding: 6px 8px;
  padding: ${({ isBigPudding }) => (isBigPudding ? '6px 32px' : '6px 8px')};
  cursor: pointer;

  &:hover {
    box-shadow: ${({ boxShadow = `${mainBoxShadow}` }) => boxShadow};
  }
`
