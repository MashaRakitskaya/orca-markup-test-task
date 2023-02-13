import styled from 'styled-components'

export const AdditionalInfoWithScrollbar = () => `
height: 208px;
overflow: auto;

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

export const AdditionalInfoWrapper = styled.div`
  padding: ${({ secondary }) => (secondary ? '24px 24px 0 24px' : '24px 32px')};
  ${({ secondary }) => (secondary ? '' : `${AdditionalInfoWithScrollbar()}`)}
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
  word-wrap: break-word;
`
