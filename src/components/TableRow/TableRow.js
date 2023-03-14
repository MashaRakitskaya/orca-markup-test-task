import React, { useState } from 'react'

import CopyButton from 'components/CopyButton/CopyButton'
import ScanSourceAnchor from 'components/ScanSourceAnchor/ScanSourceAnchor'
import FileNameAndSize from 'components/FileNameAndSize/FileNameAndSize'
import { ExpandedDataCell, ExpandedRow, DataCell, RowEmpty, Row } from './TableRow.styles'
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo'
import { getSeverityIcon } from 'utils/utils'

const TableRow = ({
  id,
  name,
  severity,
  fileName,
  fileSize,
  ipAddressV4,
  ipAddressV6,
  scanSource,
  additionalInfo,
}) => {
  const [isExpanded, setExpanded] = useState(false)

  const toggleExpandedTr = () => setExpanded(!isExpanded)

  return (
    <>
      <Row onClick={toggleExpandedTr}>
        <DataCell>{getSeverityIcon(severity)}</DataCell>
        <DataCell>{name}</DataCell>
        <DataCell>
          <FileNameAndSize fileName={fileName} fileSize={fileSize} />
        </DataCell>
        <DataCell>
          <CopyButton ipAddressType={ipAddressV4}></CopyButton>
        </DataCell>
        <DataCell>
          <CopyButton ipAddressType={ipAddressV6}></CopyButton>
        </DataCell>
        <DataCell>
          <ScanSourceAnchor url={scanSource}></ScanSourceAnchor>
        </DataCell>
      </Row>

      {isExpanded && (
        <ExpandedRow>
          <ExpandedDataCell colSpan="6">
            <AdditionalInfo id={id} additionalInfo={additionalInfo} />
          </ExpandedDataCell>
        </ExpandedRow>
      )}
      <RowEmpty />
    </>
  )
}

export default TableRow
