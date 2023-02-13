import React, { useState } from 'react'

import CopyButton from 'components/CopyButton/CopyButton'
import ScanSourceAnchor from 'components/ScanSourceAnchor/ScanSourceAnchor'
import FileNameAndSize from 'components/FileNameAndSize/FileNameAndSize'
import { ExpandedTableRow, TableRowStyled } from './TableRow.styles'
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
        <td>{getSeverityIcon(severity)}</td>
        <td>{name}</td>
        <td>
          <FileNameAndSize fileName={fileName} fileSize={fileSize} />
        </td>
        <td>
          <CopyButton ipAddressType={ipAddressV4}></CopyButton>
        </td>
        <td>
          <CopyButton ipAddressType={ipAddressV6}></CopyButton>
        </td>
        <td>
          <ScanSourceAnchor url={scanSource}></ScanSourceAnchor>
        </td>
      </TableRowStyled>

      {isExpanded && (
        <ExpandedTableRow>
          <td colSpan="6">
            <AdditionalInfo id={id} additionalInfo={additionalInfo} />
          </td>
        </ExpandedTableRow>
      )}
    </>
  )
}

export default TableRow
