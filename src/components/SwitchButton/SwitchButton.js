import React from 'react'
import {
  SwitchButtonImgLeft,
  SwitchButtonImgRight,
  SwitchButtonWrapper,
} from './SwitchButton.styles'
import SVG from 'react-inlinesvg'
import table from 'images/table.svg'
import cards from 'images/cards.svg'

const SwitchButton = ({ isToggle, toggleSwitchButton }) => {
  return (
    <SwitchButtonWrapper isToggle={isToggle} onClick={toggleSwitchButton}>
      <SwitchButtonImgLeft isToggle={isToggle}>
        <SVG src={table} alt="table"></SVG>
      </SwitchButtonImgLeft>
      <SwitchButtonImgRight isToggle={isToggle}>
        <SVG src={cards} alt="cards"></SVG>
      </SwitchButtonImgRight>
    </SwitchButtonWrapper>
  )
}

export default SwitchButton
