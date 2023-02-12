import React from 'react'
import {
  AdditionalInfoText,
  AdditionalInfoTitle,
  AdditionalInfoWrapper,
  ButtonDropDownWrapper,
  ExpandedTableRow,
} from './ExpandedAdditionalInfo.styles'
import Button from 'components/Button/Button'
import DropDown from 'components/DropDown/DropDown'
import download from 'images/download.svg'

const ExpandedAdditionalInfo = ({ additionalInfo }) => {
  return (
    <ExpandedTableRow>
      <td colSpan="6">
        <AdditionalInfoWrapper>
          <AdditionalInfoTitle>Additional info</AdditionalInfoTitle>
          <AdditionalInfoText>{additionalInfo}</AdditionalInfoText>
          <ButtonDropDownWrapper>
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
            ></DropDown>
          </ButtonDropDownWrapper>
        </AdditionalInfoWrapper>
      </td>
    </ExpandedTableRow>
  )
}

export default ExpandedAdditionalInfo
