import styled from 'styled-components'

import {
  fillImgColor,
  secondaryBgColor,
  trBgColorHover,
  secondaryFontColor,
  mainBorder,
  mainTransition,
} from 'styles/variables.styles'

export const TableRowStyled = styled.tr`
  height: 60px;
  background: ${secondaryBgColor};
  ${mainTransition({ property: 'background' })}

  td {
    padding: 0px;
    border-bottom: ${mainBorder};
    border-top: ${mainBorder};
  }

  td:first-child {
    border-radius: 4px 0 0 4px;
    padding-left: 32px;
    padding-right: 42px;
    border-left: ${mainBorder};
    width: 24px;
  }

  td:last-child {
    border-radius: 0 4px 4px 0;
    border-right: ${mainBorder};
  }

  &:hover {
    cursor: pointer;
    background: ${trBgColorHover};

    * {
      color: ${secondaryFontColor};
    }

    SVG {
      rect {
        stroke: ${fillImgColor.white};
      }

      path {
        fill: ${fillImgColor.white};
      }
    }
  }
`

export const ExpandedTableRow = styled.tr`
  background: ${secondaryBgColor};
  td {
    padding: 0px;
    border: ${mainBorder};
    border-top: none;
    border-radius: 4px;
  }
`

export const TableRowEmpty = styled.tr`
  height: 8px;
  &:last-of-type {
    height: 0;
  }
`
