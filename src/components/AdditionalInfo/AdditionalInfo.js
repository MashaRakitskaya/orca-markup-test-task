import React from 'react'
import { Text, Title, Wrapper, ButtonsDropDownWrapper } from './AdditionalInfo.styles'
import Button from 'components/Button/Button'
import DropDown from 'components/DropDown/DropDown'
import download from 'images/download.svg'
import { mainBorder, mainFontColor } from 'styles/variables.styles'
import PropTypes from 'prop-types'

const AdditionalInfo = ({ additionalInfo, secondary, isCancelButton }) => {
  return (
    <Wrapper secondary={secondary}>
      <Title>Additional info</Title>
      <Text>{additionalInfo}</Text>
      <ButtonsDropDownWrapper>
        <Button buttonText={'Download'} />
        <DropDown
          secondary={true}
          buttonTitle={'Download as'}
          buttonImg={download}
          buttonImgAlt={'download'}
          options={[
            { name: 'Document', id: '1' },
            { name: 'Image', id: '2' },
            { name: 'PDF', id: '3' },
            { name: 'HTML', id: '4' },
          ]}
        />
        {isCancelButton && (
          <Button
            boxShadow={'none'}
            fontColor={`${mainFontColor}`}
            border={`${mainBorder}`}
            background={'transparent'}
            buttonText={'Cancel'}
          />
        )}
      </ButtonsDropDownWrapper>
    </Wrapper>
  )
}

AdditionalInfo.propTypes = {
  additionalInfo: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
  isCancelButton: PropTypes.bool,
}

AdditionalInfo.defaultProps = {
  secondary: false,
  isCancelButton: false,
}

export default AdditionalInfo
