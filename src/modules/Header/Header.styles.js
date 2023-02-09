import styled from 'styled-components'
import { border } from 'styles/variables.styles'

export const HeaderStyled = styled.header`
  width: 100%;
  height: 57px;
  ${border({ property: 'border-bottom' })}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Filters = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`
