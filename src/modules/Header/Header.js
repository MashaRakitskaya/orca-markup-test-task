import React from 'react'
import { Filters, HeaderStyled } from 'modules/Header/Header.styles'
import Logo from 'components/Logo/Logo'
import Checkbox from 'components/Checkbox/Checkbox'
import DropDown from 'components/DropDown/DropDown'
import group from 'images/group.svg'
import sort from 'images/sort.svg'
import SwitchButton from 'components/SwitchButton/SwitchButton'

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <Filters>
        <Checkbox id={'checkbox1'} label={'Show additional items'} />
        <DropDown
          DropDownButtonTitle={'Group by'}
          DropDownButtonImg={group}
          DropDownButtonImgAlt={'group'}
          options={[
            { name: 'Name', id: '1' },
            { name: 'File name', id: '2' },
            { name: 'IP Address v4', id: '3' },
            { name: 'IP Address v6', id: '4' },
            { name: 'Scan source', id: '5' },
          ]}
        ></DropDown>
        <DropDown
          DropDownButtonTitle={'Sort by'}
          DropDownButtonImg={sort}
          DropDownButtonImgAlt={'sort'}
          options={[
            { name: 'Name', id: '1' },
            { name: 'File name', id: '2' },
            { name: 'IP Address v4', id: '3' },
            { name: 'IP Address v6', id: '4' },
            { name: 'Scan source', id: '5' },
          ]}
        ></DropDown>
        <SwitchButton />
      </Filters>
    </HeaderStyled>
  )
}

export default Header
