import React, { useState } from 'react'
import {
  ButtonWrapper,
  Container,
  CardItemStyled,
  CopyButtonsScanSourceContainer,
  Name,
  Names,
  NamesValuesContainer,
  NamesValuesContainerWithMarginTop,
  NamesWithMarginTop,
  SeveritySvgTextContainer,
  Value,
  Values,
} from './CardItem.styles'
import Button from 'components/Button/Button'
import { getSeverityIcon } from 'utils/utils'
import FileNameAndSize from 'components/FileNameAndSize/FileNameAndSize'
import CopyButton from 'components/CopyButton/CopyButton'
import ScanSourceAnchor from 'components/ScanSourceAnchor/ScanSourceAnchor'
import Popup from 'components/Popup/Popup'
import PropTypes from 'prop-types'

const CardItem = ({
  name,
  severity,
  fileName,
  fileSize,
  ipAddressV4,
  ipAddressV6,
  scanSource,
  additionalInfo,
}) => {
  const [isOpenPopup, togglePopup] = useState(false)

  return (
    <>
      <CardItemStyled>
        <Container>
          <NamesValuesContainerWithMarginTop>
            <Names>
              <Name>Risk level:</Name>
              <Name>Name:</Name>
              <Name>File name:</Name>
            </Names>
            <Values>
              <SeveritySvgTextContainer>
                {getSeverityIcon(severity)}
                <Value>{severity}</Value>
              </SeveritySvgTextContainer>
              <Value>{name}</Value>
              <FileNameAndSize secondary={true} fileName={fileName} fileSize={fileSize} />
            </Values>
          </NamesValuesContainerWithMarginTop>
          <NamesValuesContainer>
            <NamesWithMarginTop>
              <Name>IP Address v4:</Name>
              <Name>IP Address v6:</Name>
              <Name>Scan source:</Name>
            </NamesWithMarginTop>
            <CopyButtonsScanSourceContainer>
              <CopyButton ipAddressType={ipAddressV4} />
              <CopyButton ipAddressType={ipAddressV6} />
              <ScanSourceAnchor secondary={true} url={scanSource} />
            </CopyButtonsScanSourceContainer>
          </NamesValuesContainer>
        </Container>

        <ButtonWrapper>
          <Button
            onClick={() => togglePopup(!isOpenPopup)}
            buttonText={'Show additional info'}
            isBigPudding={true}
          />
        </ButtonWrapper>
      </CardItemStyled>
      <Popup
        title={name}
        isOpenPopup={isOpenPopup}
        closePopup={togglePopup}
        additionalInfo={additionalInfo}
        severity={severity}
      />
    </>
  )
}

CardItem.propTypes = {
  name: PropTypes.string.isRequired,
  severity: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  fileSize: PropTypes.string.isRequired,
  ipAddressV4: PropTypes.string.isRequired,
  ipAddressV6: PropTypes.string.isRequired,
  scanSource: PropTypes.string.isRequired,
  additionalInfo: PropTypes.string.isRequired,
}

export default CardItem
