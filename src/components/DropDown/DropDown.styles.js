import styled, { css } from 'styled-components'
import {
  mainFontColor,
  secondaryBgColor,
  mainColor,
  dropdownBgColorHover,
  mainBorder,
  mainTransition,
  secondaryFontColor,
  fillImgColor,
  mainBoxShadow,
} from 'styles/variables.styles'

export const DropDownListOpensUp = () => css`
  top: -120px;
`

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
  background-color: ${({ secondary }) => (secondary ? `${mainColor}` : `${secondaryBgColor}`)};
  border: ${({ secondary }) => (secondary ? 'none' : `${mainBorder}`)};
  border-radius: 4px;
  ${({ secondary }) =>
    secondary
      ? `${mainTransition({ property: 'box-shadow' })}`
      : `${mainTransition({ property: 'border-color' })}`};

  SVG {
    path {
      ${mainTransition({ property: 'fill' })};
      fill: ${({ secondary }) => (secondary ? `${fillImgColor.white}` : `${fillImgColor.gray}`)};
    }
  }

  &:hover {
    box-shadow: ${({ secondary }) => (secondary ? `${mainBoxShadow}` : '')};
    & SVG {
      path {
        transition-property: fill;
        fill: ${({ secondary }) => (secondary ? `${fillImgColor.white}` : `${fillImgColor.blue}`)};
      }
    }
  }
`

export const DropDownTitle = styled.p`
  margin: 0 8px 0 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  white-space: nowrap;
  color: ${({ secondary }) => (secondary ? `${secondaryFontColor}` : `${mainFontColor}`)};
`
export const DropDownListContainer = styled.div`
  position: absolute;
  right: 0px;
  ${({ secondary }) => (secondary ? `${DropDownListOpensUp()}` : '')};
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
  padding-right: ${({ secondary }) => (secondary ? '55px' : '16px')};
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
