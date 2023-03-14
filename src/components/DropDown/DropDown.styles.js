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
  mainFontStyles,
  blueBorderHover,
} from 'styles/variables.styles'

export const DropDownListOpensUp = () => css`
  top: -120px;
`

export const Container = styled.div`
  position: relative;
`
export const Button = styled.button`
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
    border: ${({ secondary }) => (secondary ? 'none' : `${blueBorderHover}`)};
    box-shadow: ${({ secondary }) => (secondary ? `${mainBoxShadow}` : '')};
    & SVG {
      path {
        transition-property: fill;
        fill: ${({ secondary }) => (secondary ? `${fillImgColor.white}` : `${fillImgColor.blue}`)};
      }
    }
  }
`

export const Title = styled.p`
  margin: 0 8px 0 8px;
  ${mainFontStyles};
  white-space: nowrap;
  color: ${({ secondary }) => (secondary ? `${secondaryFontColor}` : `${mainFontColor}`)};
`
export const ListContainer = styled.div`
  position: absolute;
  right: 0px;
  ${({ secondary }) => (secondary ? `${DropDownListOpensUp()}` : '')};
`
export const List = styled.ul`
  weight: 100%;
  margin: 4px 0 0 0;
  padding: 4px 0 4px 0;
  background-color: ${secondaryBgColor};
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  ${mainFontStyles};
  color: ${mainFontColor};
`
export const ListItem = styled.li`
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

export const ArrowWrapper = styled.div`
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
