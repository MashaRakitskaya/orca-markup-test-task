import styled from 'styled-components'

import { fillImgColor, mainColor, mainTransition, mainFontColor } from 'styles/variables.styles'

export const ScanSourceAnchorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  a {
    color: ${mainFontColor};
    ${mainTransition({ property: 'color' })}
    text-decoration: none;
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
