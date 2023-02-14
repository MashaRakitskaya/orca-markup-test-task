import styled, { css } from 'styled-components'

import { fillImgColor, mainColor, mainTransition, mainFontColor } from 'styles/variables.styles'

export const cardsAnchorOverflow = () => css`
  word-wrap: break-word;
`

export const Anchor = styled.a`
  ${mainTransition({ property: 'color' })}
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${mainFontColor};

  &:hover {
    color: ${mainColor};
  }

  &:visited {
    color: ${mainColor};
  }

  &:active {
    color: ${mainColor};
  }
`

export const ScanSourceAnchorWrapper = styled.div`
  display: flex;
  gap: 4px;
  cursor: pointer;
  align-items: ${({ secondary }) => (secondary ? 'flex-start' : 'center')};

  SVG {
    padding-top: ${({ secondary }) => (secondary ? '3px' : '0')};
  }
`

export const ScanSourceAnchorSvgContainer = styled.div`
  width: ${({ secondary }) => (secondary ? '177px' : '')};
  ${({ secondary }) => (secondary ? `${cardsAnchorOverflow()}` : '')};

  SVG {
    margin-left: 4px;
    path {
      ${mainTransition({ property: 'fill' })}
    }
  }

  &:hover {
    ${Anchor} {
      color: ${mainColor};
    }

    &:last-child SVG {
      path {
        fill: ${fillImgColor.blue};
      }
    }
  }
`
