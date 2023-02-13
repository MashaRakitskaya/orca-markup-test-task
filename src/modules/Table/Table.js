import React from 'react'
import { TableHeaderCell, TableStyled } from './Table.styles'

import TableRow from 'components/TableRow/TableRow'
import { tableRowsData, tableHeaderData } from 'utils/constants'

const Table = () => {
  return (
    <section>
      <TableStyled>
        <thead>
          <tr>
            <th>{/*Intentionally Blank*/}</th>
            {tableHeaderData.map(({ title, id }) => (
              <TableHeaderCell key={id}>{title}</TableHeaderCell>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRowsData.map(
            ({
              id,
              name,
              severity,
              fileName,
              fileSize,
              ipAddressV4,
              ipAddressV6,
              scanSource,
              additionalInfo,
            }) => (
              <TableRow
                key={`${id}tableRow`}
                id={id}
                name={name}
                severity={severity}
                fileName={fileName}
                fileSize={fileSize}
                ipAddressV4={ipAddressV4}
                ipAddressV6={ipAddressV6}
                scanSource={scanSource}
                additionalInfo={additionalInfo}
              />
            ),
          )}
        </tbody>
      </TableStyled>
    </section>
  )
}

export default Table
