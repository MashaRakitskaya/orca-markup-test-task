import React, { useState } from 'react'
import SVG from 'react-inlinesvg'
import criticalSeverity from 'images/criticalseverity.svg'
import highSeverity from 'images/highseverity.svg'
import mediumSeverity from 'images/mediumseverity.svg'
import CopyButton from 'components/CopyButton/CopyButton'
import ScanSourceAnchor from 'components/ScanSourceAnchor/ScanSourceAnchor'
import FileNameAndSize from 'components/FileNameAndSize/FileNameAndSize'
import { TableRowStyled } from './TableRow.styles'
import ExpandedAdditionalInfo from 'components/ExpandedAdditionalInfo/ExpandedAdditionalInfo'

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

  const getSeverityIcon = severity => {
    if (severity === 'critical') {
      return <SVG src={criticalSeverity} alt="critical severity" />
    } else if (severity === 'high') {
      return <SVG src={highSeverity} alt="high severity" />
    } else if (severity === 'medium') {
      return <SVG src={mediumSeverity} alt="medium severity" />
    }
  }

  return (
    <>
      <TableRowStyled onClick={toggleExpandedTr} key={id}>
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

      {isExpanded && <ExpandedAdditionalInfo id={id} additionalInfo={additionalInfo} />}
    </>
  )
}

export default TableRow
