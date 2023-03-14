import styled, { css } from 'styled-components'
import { headerFontColor, mainFontColor, mainFontStyles } from 'styles/variables.styles'

export const AdditionalInfoWithScrollbar = () => css`
  height: 150px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #f8f8f8;
    border-radius: 0px 0px 3px 0px;
    border-left: 1px solid #cacfdb;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #b5b5bd;
    border: 3px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
  }
`

export const Wrapper = styled.div`
  ${({ secondary }) => (secondary ? '' : `${AdditionalInfoWithScrollbar()}`)};
  padding: ${({ secondary }) => (secondary ? '24px 24px 0px 24px' : '24px 20px 24px 32px')};
`
export const ButtonsDropDownWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 16px;
  padding-top: 16px;
`

export const Title = styled.p`
  margin: 0px;
  margin-bottom: 8px;
  ${mainFontStyles};
  color: ${headerFontColor};
`

export const Text = styled.p`
  margin: 0px;
  ${mainFontStyles};
  color: ${mainFontColor};
  word-break: break-all;
`
