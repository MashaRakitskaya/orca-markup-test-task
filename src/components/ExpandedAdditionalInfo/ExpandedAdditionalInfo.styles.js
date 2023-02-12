import styled from 'styled-components'

import { secondaryBgColor, mainBorder } from 'styles/variables.styles'

export const ExpandedTableRow = styled.tr`
  background: ${secondaryBgColor};
  td {
    padding: 0px;
    border: ${mainBorder};
    border-radius: 4px;
  }
`

export const AdditionalInfoWrapper = styled.div`
  height: 208px;
  overflow: auto;
  padding: 24px 32px;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #f8f8f8;
    border-left: 1px solid #cacfdb;
    border-radius: 0px 0px 3px 0px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #b5b5bd;
    border: 3px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
  }
`
export const ButtonDropDownWrapper = styled.div`
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
  color: #70707b;
`

export const AdditionalInfoText = styled.p`
  margin: 0px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #10111d;
`
