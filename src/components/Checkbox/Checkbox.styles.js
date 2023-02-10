import styled from 'styled-components'
import { mainFontColor, mainColor, border, borderHover, transition } from 'styles/variables.styles'

export const CheckboxContainer = styled.div`
  weight: 164px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;

  input {
    cursor: pointer;
    opacity: 0;
    position: absolute;
  }

  input:checked {
    & + label::before {
      content: '';
      background: ${({ checkmark }) => checkmark} no-repeat 50%;
      background-size: 8px 6px;
      ${mainColor({ property: 'background-color' })};
    }
  }

  input:focus {
    & + label::before {
      box-shadow: 0px 0px 0px 2px #e1eefd;
    }
  }

  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    ${mainFontColor}
    cursor: pointer;
    display: flex;

    &:hover {
      &::before {
        ${transition({ property: 'border-color' })}
        ${borderHover}
      }
    }
  }

  label::before {
    content: '';
    ${border({ property: 'border' })}
    width: 12px;
    height: 12px;
    border-radius: 2px;
    margin: auto;
    margin-right: 8px;
  }
`