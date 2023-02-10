import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
${normalize}
body {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
`
export default GlobalStyle
