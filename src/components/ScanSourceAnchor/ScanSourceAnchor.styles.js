import styled from 'styled-components'

import { fillImgColor, mainColor, mainTransition, mainFontColor } from 'styles/variables.styles'

export const cardsAnchorOverflow = () => `
width: 168px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`

export const ScanSourceAnchorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  a {
    color: ${mainFontColor};
    ${mainTransition({ property: 'color' })}
    text-decoration: none;
    ${({ secondary }) => (secondary ? `${cardsAnchorOverflow()}` : '')}
  }

  SVG:last-child {
    path {
      ${mainTransition({ property: 'fill' })}
    }
  }

  &:hover {
    a {
      color: ${mainColor};
    }

    SVG:last-child {
      path {
        fill: ${fillImgColor.blue};
      }
    }
  }
`
