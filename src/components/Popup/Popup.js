import React from 'react'
import ReactDOM from 'react-dom'
import {
  ButtonClose,
  ModalTitleSvgContainer,
  ModalWindow,
  ModalWindowContent,
  ModalWindowTitle,
  SvgIconForPopupStyled,
} from './Popup.styles'
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo'
import { imgColorType } from 'styles/variables.styles'
import criticalSeverity from 'images/criticalseverity.svg'
import highSeverity from 'images/highseverity.svg'
import mediumSeverity from 'images/mediumseverity.svg'

const Popup = ({ isOpenPopup, title, closePopup, additionalInfo, severity }) => {
  const getIconColor = severity => {
    if (severity === 'Critical') {
      return imgColorType.red
    } else if (severity === 'High') {
      return imgColorType.orange
    } else if (severity === 'Medium') {
      return imgColorType.yellow
    }
  }

  const getSeverityIconForPopup = severity => {
    if (severity === 'Critical') {
      return (
        <SvgIconForPopupStyled
          color={getIconColor(severity)}
          src={criticalSeverity}
          alt="critical severity"
        />
      )
    } else if (severity === 'High') {
      return (
        <SvgIconForPopupStyled
          color={getIconColor(severity)}
          src={highSeverity}
          alt="high severity"
        />
      )
    } else if (severity === 'Medium') {
      return (
        <SvgIconForPopupStyled
          color={getIconColor(severity)}
          src={mediumSeverity}
          alt="medium severity"
        />
      )
    }
  }
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
          {getSeverityIconForPopup(severity)}
          <ModalWindowTitle>{title}</ModalWindowTitle>
        </ModalTitleSvgContainer>
        <AdditionalInfo isCancelButton={true} secondary={true} additionalInfo={additionalInfo} />
      </ModalWindowContent>
    </ModalWindow>,
    document.getElementById('modal-root'),
  )
}

export default Popup
