import React from 'react'
import { ImgLeft, ImgRight, Wrapper } from './SwitchButton.styles'
import SVG from 'react-inlinesvg'
import table from 'images/table.svg'
import cards from 'images/cards.svg'

const SwitchButton = ({ isToggle, toggleSwitchButton }) => {
  return (
    <Wrapper isToggle={isToggle} onClick={toggleSwitchButton}>
      <ImgLeft isToggle={isToggle}>
        <SVG src={table} alt="table"></SVG>
      </ImgLeft>
      <ImgRight isToggle={isToggle}>
        <SVG src={cards} alt="cards"></SVG>
      </ImgRight>
    </Wrapper>
  )
}

export default SwitchButton
