import React from 'react'
import {
  AdditionalInfoText,
  AdditionalInfoTitle,
  AdditionalInfoWrapper,
  ButtonsDropDownWrapper,
} from './AdditionalInfo.styles'
import Button from 'components/Button/Button'
import DropDown from 'components/DropDown/DropDown'
import download from 'images/download.svg'

const AdditionalInfo = ({ additionalInfo, secondary = false }) => {
  return (
    <AdditionalInfoWrapper secondary={secondary}>
      <AdditionalInfoTitle>Additional info</AdditionalInfoTitle>
      <AdditionalInfoText>{additionalInfo}</AdditionalInfoText>
      <ButtonsDropDownWrapper>
        <Button buttonText={'Download'} />
        <DropDown
          secondary={true}
          DropDownButtonTitle={'Download as'}
          DropDownButtonImg={download}
          DropDownButtonImgAlt={'download'}
          options={[
            { name: 'Document', id: '1' },
            { name: 'Image', id: '2' },
            { name: 'PDF', id: '3' },
            { name: 'HTML', id: '4' },
          ]}
        />
        {secondary && <Button secondary={true} buttonText={'Cancel'} />}
      </ButtonsDropDownWrapper>
    </AdditionalInfoWrapper>
  )
}

export default AdditionalInfo
