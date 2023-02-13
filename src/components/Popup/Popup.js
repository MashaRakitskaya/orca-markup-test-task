import React from 'react'
import ReactDOM from 'react-dom'
import {
  ButtonClose,
  ModalTitleSvgContainer,
  ModalWindow,
  ModalWindowContent,
  ModalWindowTitle,
} from './Popup.styles'
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo'
import { getSeverityIcon } from 'utils/utils'

const Popup = ({ isOpenPopup, title, closePopup, additionalInfo, severity }) => {
  if (!isOpenPopup) return null
  return ReactDOM.createPortal(
    <ModalWindow isOpenPopup={isOpenPopup} onClick={() => closePopup(false)} role="popup">
      <ModalWindowContent
        onClick={e => {
          e.stopPropagation()
        }}
      >
        <ButtonClose role="close" type="button" onClick={() => closePopup(false)} />
        <ModalTitleSvgContainer>
          {getSeverityIcon(severity)}
          <ModalWindowTitle>{title}</ModalWindowTitle>
        </ModalTitleSvgContainer>
        <AdditionalInfo secondary={true} additionalInfo={additionalInfo} />
      </ModalWindowContent>
    </ModalWindow>,
    document.getElementById('modal-root'),
  )
}

export default Popup
