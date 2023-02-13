import styled, { css } from 'styled-components'
import { headerFontColor, mainBorder, mainFontColor } from 'styles/variables.styles'

export const AdditionalInfoWithScrollbar = () => css`
  height: 150px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #f8f8f8;
    border-left: ${mainBorder};
    border-radius: 0px 0px 3px 0px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #b5b5bd;
    border: 3px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
  }
`

export const AdditionalInfoWrapper = styled.div`
  ${({ secondary }) => (secondary ? '' : `${AdditionalInfoWithScrollbar()}`)};
  padding: ${({ secondary }) => (secondary ? '24px 24px 0px 24px' : '24px 32px')};
`
export const ButtonsDropDownWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 16px;
  padding-top: 16px;
`

export const AdditionalInfoTitle = styled.p`
  margin: 0px;
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${headerFontColor};
`

export const AdditionalInfoText = styled.p`
  margin: 0px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${mainFontColor};
  word-wrap: break-word;
`
