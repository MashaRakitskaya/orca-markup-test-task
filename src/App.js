import React, { useState } from 'react'
import { Page, PageContainer, Main } from 'App.styles'
import Header from 'modules/Header/Header'
import Table from 'modules/Table/Table'
import Cards from 'modules/Cards/Cards'

const App = () => {
  const [isToggle, setToggle] = useState(false)

  const toggleSwitchButton = () => {
    setToggle(!isToggle)
    localStorage.setItem('isSwitchButtonCards', isToggle)
  }

  return (
    <Page id="modal-root">
      <PageContainer>
        <Header isToggle={isToggle} toggleSwitchButton={toggleSwitchButton} />
        <Main>{isToggle ? <Table /> : <Cards />}</Main>
      </PageContainer>
    </Page>
  )
}

export default App
