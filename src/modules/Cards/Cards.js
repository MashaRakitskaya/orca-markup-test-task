import React from 'react'
import { Container } from './Cards.styles'
import CardItem from 'components/CardItem/CardItem'
import { tableRowsData } from 'utils/constants'

const Cards = () => {
  return (
    <section>
      <Container>
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
            <CardItem
              key={`${id}cardItem`}
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
      </Container>
    </section>
  )
}

export default Cards
