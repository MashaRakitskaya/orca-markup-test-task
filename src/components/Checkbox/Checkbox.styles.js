import styled from 'styled-components'
import {
  mainFontColor,
  mainColor,
  mainBorder,
  mainBorderHover,
  mainTransition,
  mainFontStyles,
} from 'styles/variables.styles'

export const CheckboxContainer = styled.div`
  weight: 164px;
  height: 18px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Label = styled.label`
  ${mainFontStyles};
  white-space: nowrap;
  color: ${mainFontColor};
  cursor: pointer;
  display: flex;

  &:hover {
    &::before {
      ${mainTransition({ property: 'border-color' })}
      border:${mainBorderHover};
    }
  }

  &::before {
    content: '';
    box-sizing: border-box;
    border: ${mainBorder};
    width: 12px;
    height: 12px;
    border-radius: 2px;
    margin: auto;
    margin-right: 8px;
    background: #fdfdff;
  }
`

export const Input = styled.input`
  cursor: pointer;
  opacity: 0;
  position: absolute;

  &:checked {
    & + ${Label}::before {
      content: '';
      background: ${({ checkmark }) => checkmark} no-repeat 50%;
      background-size: 8px 6px;
      background-color: ${mainColor};
    }
  }

  &:focus {
    & + ${Label}::before {
      box-shadow: 0px 0px 0px 2px #e1eefd;
    }
  }
`
