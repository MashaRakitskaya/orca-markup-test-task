import styled from 'styled-components'
import {
  mainFontColor,
  secondaryBgColor,
  mainColor,
  dropdownBgColorHover,
  mainBorder,
  mainBorderHover,
  mainTransition,
} from 'styles/variables.styles'

export const DropDownContainer = styled.div`
  position: relative;
`
export const DropDownButton = styled.button`
  cursor: pointer;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 8px;
  height: 30px;
  background-color: ${secondaryBgColor};
  ${mainBorder({ borderType: 'border' })};
  border-radius: 4px;
  ${mainTransition({ property: 'border-color' })}

  p {
    margin: 0 8px 0 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    white-space: nowrap;
    color: ${mainFontColor};
  }

  SVG {
    path {
      ${mainTransition({ property: 'fill' })};
    }
  }

  &:hover {
    border: ${mainBorderHover};

    & SVG {
      path {
        transition-property: fill;
        fill: ${mainColor};
      }
    }
  }
`
export const DropDownListContainer = styled.div`
  position: absolute;
  right: 0px;
`
export const DropDownList = styled.ul`
  weight: 100%;
  margin: 4px 0 0 0;
  padding: 4px 0 4px 0;
  background-color: ${secondaryBgColor};
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${mainFontColor};
`
export const DropDownListItem = styled.li`
  white-space: nowrap;
  list-style: none;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 16px;
  padding-right: 16px;
  cursor: pointer;
  ${mainTransition({ property: 'background-color' })};

  &:hover {
    color: ${mainColor};
    background-color: ${dropdownBgColorHover};
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export const DropDownArrowWrapper = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  SVG {
    ${mainTransition({ property: 'transform' })}
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : '')};

    path {
      ${mainTransition({ property: 'fill' })}
    }
  }
`
