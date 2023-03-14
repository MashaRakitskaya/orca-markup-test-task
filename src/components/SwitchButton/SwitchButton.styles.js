import styled from 'styled-components'

import {
  secondaryBgColor,
  mainBorder,
  mainColor,
  mainTransition,
  fillImgColor,
} from 'styles/variables.styles'

export const Wrapper = styled.div`
  margin: 0px;
  padding: 1px;
  border-radius: 4px;
  background-color: ${secondaryBgColor};
  border: ${mainBorder};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Img = ({ backgroundColor, fillImg, fillImgHover }) => styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  ${mainTransition({ property: 'background-color' })}
  background-color: ${backgroundColor};

  SVG {
    width: 12px;
    height: 12px;
    path {
      fill: ${fillImg};
      ${mainTransition({ property: 'fill' })}
    }
  }

  &:hover {
    & SVG {
      path {
        transition-property: fill;
        fill: ${fillImgHover};
      }
    }
  }
`

export const ImgLeft = Img({
  backgroundColor: ({ isToggle }) => (isToggle ? `${mainColor}` : 'transparent'),
  fillImg: ({ isToggle }) => (isToggle ? `${fillImgColor.white}` : `${fillImgColor.dark}`),
  fillImgHover: ({ isToggle }) => !isToggle && `${mainColor}`,
})

export const ImgRight = Img({
  backgroundColor: ({ isToggle }) => (isToggle ? 'transparent' : `${mainColor}`),
  fillImg: ({ isToggle }) => (isToggle ? `${fillImgColor.dark}` : `${fillImgColor.white}`),
  fillImgHover: ({ isToggle }) => isToggle && `${mainColor}`,
})
