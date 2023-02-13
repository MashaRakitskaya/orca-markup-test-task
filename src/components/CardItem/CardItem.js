import React, { useState } from 'react'
import {
  ButtonWrapper,
  CardDataContainer,
  CardItemStyled,
  CopyButtonsScanSourceContainer,
  Names,
  NamesValuesContainer,
  SeveritySvgTextContainer,
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
          <NamesValuesContainer style={{ marginTop: '4px' }}>
            <Names>
              <p>Risk level:</p>
              <p>Name:</p>
              <p>File name:</p>
            </Names>
            <Values>
              <SeveritySvgTextContainer>
                {getSeverityIcon(severity)}
                <p>{severity}</p>
              </SeveritySvgTextContainer>
              <p>{name}</p>
              <FileNameAndSize secondary={true} fileName={fileName} fileSize={fileSize} />
            </Values>
          </NamesValuesContainer>
          <NamesValuesContainer>
            <Names>
              <p>IP Address v4:</p>
              <p>IP Address v6:</p>
              <p>Scan source:</p>
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
