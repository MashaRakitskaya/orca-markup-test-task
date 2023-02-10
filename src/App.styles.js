import styled from 'styled-components'
import { mainFontFamily, mainBgColor } from 'styles/variables.styles'

export const Page = styled.div`
  height: 100vh;
  overflow: auto;
  background-color:${mainBgColor}
  font-family: ${mainFontFamily}
  display: flex;
`
export const PageContainer = styled.div`
  margin: auto;
  min-width: 320px;
  width: 1224px;
`
