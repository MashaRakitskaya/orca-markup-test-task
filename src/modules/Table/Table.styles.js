import styled from 'styled-components'
import { headerFontColor, mainFontStyles } from 'styles/variables.styles'

export const TableStyled = styled.table`
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  table-layout: auto;

  * {
    ${mainFontStyles};
  }
`

export const TableHeaderCell = styled.th`
  padding: 0px;
  padding-bottom: 8px;
  ${mainFontStyles};
  color: ${headerFontColor};
  text-align: start;
`
