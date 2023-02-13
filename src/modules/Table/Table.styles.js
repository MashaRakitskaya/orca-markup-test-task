import styled from 'styled-components'
import { headerFontColor } from 'styles/variables.styles'

export const TableStyled = styled.table`
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  table-layout: auto;

  * {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
`

export const TableHeaderCell = styled.th`
  padding: 0px;
  padding-bottom: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${headerFontColor};
  text-align: start;
`
