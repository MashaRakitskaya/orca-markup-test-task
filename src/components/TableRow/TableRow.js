import React, { useState } from 'react'

import CopyButton from 'components/CopyButton/CopyButton'
import ScanSourceAnchor from 'components/ScanSourceAnchor/ScanSourceAnchor'
import FileNameAndSize from 'components/FileNameAndSize/FileNameAndSize'
import { ExpandedDataCell, ExpandedRow, DataCell, RowEmpty, Row } from './TableRow.styles'
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo'
import { getSeverityIcon } from 'utils/utils'
import PropTypes from 'prop-types'

const TableRow = ({
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
            <AdditionalInfo additionalInfo={additionalInfo} />
          </ExpandedDataCell>
        </ExpandedRow>
      )}
      <RowEmpty />
    </>
  )
}

TableRow.propTypes = {
  name: PropTypes.string.isRequired,
  severity: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  fileSize: PropTypes.string.isRequired,
  ipAddressV4: PropTypes.string.isRequired,
  ipAddressV6: PropTypes.string.isRequired,
  scanSource: PropTypes.string.isRequired,
  additionalInfo: PropTypes.string.isRequired,
}

export default TableRow
