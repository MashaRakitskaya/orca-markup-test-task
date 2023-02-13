import React, { useState } from 'react'
import {
  ButtonWrapper,
  CardDataContainer,
  CardItemStyled,
  CopyButtonsScanSourceContainer,
  Name,
  Names,
  NamesValuesContainer,
  NamesValuesContainerWithMarginTop,
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
        <CardDataContainer>
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
            <Names>
              <Name>IP Address v4:</Name>
              <Name>IP Address v6:</Name>
              <Name>Scan source:</Name>
            </Names>
            <CopyButtonsScanSourceContainer>
              <CopyButton ipAddressType={ipAddressV4} />
              <CopyButton ipAddressType={ipAddressV6} />
              <ScanSourceAnchor secondary={true} url={scanSource} />
            </CopyButtonsScanSourceContainer>
          </NamesValuesContainer>
        </CardDataContainer>

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

export default CardItem
