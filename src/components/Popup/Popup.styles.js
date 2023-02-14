import styled from 'styled-components'
import close from 'images/close.svg'
import {
  mainTransition,
  secondaryBgColor,
  mainFontColor,
  mainBorder,
  fillImgColor,
} from 'styles/variables.styles'
import SVG from 'react-inlinesvg'

export const ModalWindowContent = styled.div`
  background: ${secondaryBgColor};
  border-radius: 4px;
  width: 100%;
  max-width: 900px;
  position: relative;
  box-sizing: border-box;
  padding-bottom: 24px;
`

export const ModalWindowTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 24px;
  line-height: 18px;
  color: ${mainFontColor};
`

export const ModalWindow = styled.div`
  position: fixed;
  justify-content: center;
  align-items: center;
  background: rgba(16, 17, 29, 0.3);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  visibility: ${({ isOpenPopup }) => (isOpenPopup ? 'visible' : 'hidden')};
  opacity: ${({ isOpenPopup }) => (isOpenPopup ? '1' : '0')};
  transition: visibility 0.6s, opacity 0.5s linear;
`

export const ButtonClose = styled.button`
  background: url(${close}) no-repeat 50%;
  width: 16px;
  height: 16px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 32px;
  right: 24px;
  padding: 0px;
  margin: 0px;
  ${mainTransition({ property: 'opacity' })};
  outline: none;

  &:hover {
    opacity: 0.8;
  }
`
export const ModalTitleSvgContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 24px;
  border-bottom: ${mainBorder};
`
export const SvgIconForPopupStyled = styled(SVG)`
  background-color: ${({ color }) => color};
  border-radius: 4px;
  width: 32px;
  height: 32px;
  path {
    fill: ${fillImgColor.white};
  }
`
