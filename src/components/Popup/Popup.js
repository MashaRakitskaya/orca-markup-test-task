import React from 'react'
import ReactDOM from 'react-dom'
import {
  ButtonClose,
  TitleSvgContainer,
  ModalWindow,
  Content,
  Title,
  SvgIconForPopupStyled,
} from './Popup.styles'
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo'
import { imgColorType } from 'styles/variables.styles'
import criticalSeverity from 'images/criticalseverity.svg'
import highSeverity from 'images/highseverity.svg'
import mediumSeverity from 'images/mediumseverity.svg'
import { severityTypes } from 'utils/constants'
import PropTypes from 'prop-types'

const Popup = ({ isOpenPopup, title, closePopup, additionalInfo, severity }) => {
  const { critical, high, medium } = severityTypes

  const getIconColor = severity => {
    if (severity === critical) {
      return imgColorType.red
    } else if (severity === high) {
      return imgColorType.orange
    } else if (severity === medium) {
      return imgColorType.yellow
    }
  }

  const getSeverityIconForPopup = severity => {
    if (severity === critical) {
      return (
        <SvgIconForPopupStyled
          color={getIconColor(severity)}
          src={criticalSeverity}
          alt="critical severity"
        />
      )
    } else if (severity === high) {
      return (
        <SvgIconForPopupStyled
          color={getIconColor(severity)}
          src={highSeverity}
          alt="high severity"
        />
      )
    } else if (severity === medium) {
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
      <Content
        onClick={e => {
          e.stopPropagation()
        }}
      >
        <ButtonClose role="close" type="button" onClick={() => closePopup(false)} />
        <TitleSvgContainer>
          {getSeverityIconForPopup(severity)}
          <Title>{title}</Title>
        </TitleSvgContainer>
        <AdditionalInfo isCancelButton={true} secondary={true} additionalInfo={additionalInfo} />
      </Content>
    </ModalWindow>,
    document.getElementById('modal-root'),
  )
}

Popup.propTypes = {
  isOpenPopup: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  closePopup: PropTypes.func.isRequired,
  additionalInfo: PropTypes.string.isRequired,
  severity: PropTypes.string.isRequired,
}

export default Popup
