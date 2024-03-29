import styled from 'styled-components'
import {
  mainBorder,
  fillImgColor,
  mainTransition,
  mainFontColor,
  mainFontStyles,
} from 'styles/variables.styles'
import SVG from 'react-inlinesvg'

export const StyledSVG = styled(SVG)`
  width: 10px;
  height: 12px;
  path {
    ${mainTransition({ property: 'fill' })}
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  gap: 8px;
  padding: 4px 7px 4px 8px;
  border: ${mainBorder};
  border-radius: 4px;
  cursor: pointer;
  width: fit-content;

  &:hover {
    ${StyledSVG} {
      path {
        fill: ${fillImgColor.blue};
      }
    }
  }
`

export const Text = styled.p`
  margin: 0px;
  max-width: 164px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${mainFontStyles};
  color: ${mainFontColor};
  margin: 0px;
`
