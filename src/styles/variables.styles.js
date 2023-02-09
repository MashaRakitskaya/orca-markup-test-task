import { css } from 'styled-components'

export const mainFontFamily = css`
  font-family: 'Mulish', sans-serif;
`

export const mainFontColor = css`
  color: #10111d;
`
export const headerFontColor = css`
  color: #70707b;
`

export const secondaryColor = css`
  color: #cacfdb;
`

export const mainBgColor = css`
  background-color: #f3f4f9;
`

export const secondaryBgColor = css`
  background-color: #ffffff;
`

export const trBgColorHover = css`
  background-color: #10111d;
`

export const mainColor = ({ property }) => `
  ${property}: #0080ff;
`

export const dropdownBgColorHover = css`
  background-color: #e1eefd;
`

export const mainButtonFontColor = css`
  color: #ffffff;
`

export const border = ({ property }) => `
  ${property}: 1px solid #cacfdb;
`

export const borderHover = css`
  border: 1px solid rgba(0, 128, 255, 1);
`
export const transition = ({ property }) => `
transition-duration: 0.3s;
transition-property: ${property};
transition-timing-function: ease;
`
