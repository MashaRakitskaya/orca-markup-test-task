import React from 'react'
import { Page, PageContainer, Main } from 'App.styles'
import Header from 'modules/Header/Header'
import Table from 'modules/Table/Table'

const App = () => (
  <Page>
    <PageContainer>
      <Header />
      <Main>
        <Table />
      </Main>
    </PageContainer>
  </Page>
)

export default App
