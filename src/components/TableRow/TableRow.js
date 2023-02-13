import React, { useState } from 'react'

import CopyButton from 'components/CopyButton/CopyButton'
import ScanSourceAnchor from 'components/ScanSourceAnchor/ScanSourceAnchor'
import FileNameAndSize from 'components/FileNameAndSize/FileNameAndSize'
import {
  ExpandedTableDataCell,
  ExpandedTableRow,
  TableDataCell,
  TableRowEmpty,
  TableRowStyled,
} from './TableRow.styles'
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
      <TableRowStyled onClick={toggleExpandedTr}>
        <TableDataCell>{getSeverityIcon(severity)}</TableDataCell>
        <TableDataCell>{name}</TableDataCell>
        <TableDataCell>
          <FileNameAndSize fileName={fileName} fileSize={fileSize} />
        </TableDataCell>
        <TableDataCell>
          <CopyButton ipAddressType={ipAddressV4}></CopyButton>
        </TableDataCell>
        <TableDataCell>
          <CopyButton ipAddressType={ipAddressV6}></CopyButton>
        </TableDataCell>
        <TableDataCell>
          <ScanSourceAnchor url={scanSource}></ScanSourceAnchor>
        </TableDataCell>
      </TableRowStyled>

      {isExpanded && (
        <ExpandedTableRow>
          <ExpandedTableDataCell colSpan="6">
            <AdditionalInfo id={id} additionalInfo={additionalInfo} />
          </ExpandedTableDataCell>
        </ExpandedTableRow>
      )}
      <TableRowEmpty />
    </>
  )
}

export default TableRow
