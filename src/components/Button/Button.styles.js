import styled from 'styled-components'
import {
  mainColor,
  mainButtonFontColor,
  mainFontColor,
  mainBoxShadow,
} from 'styles/variables.styles'

export const ButtonStyled = styled.button`
  border: ${({ secondary }) => (secondary ? '1px solid #cacfdb' : 'none')};
  background: ${({ secondary }) => (secondary ? 'transparent' : `${mainColor}`)};
  border-radius: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${({ secondary }) => (secondary ? `${mainFontColor}` : `${mainButtonFontColor}`)};
  padding: 6px 8px;
  padding: ${({ isBigPudding }) => (isBigPudding ? '6px 32px' : '6px 8px')};

  cursor: pointer;

  &:hover {
    box-shadow: ${({ secondary }) => (secondary ? '' : `${mainBoxShadow}`)};
  }
`
