import React, { useState } from 'react'
import {
  DropDownContainer,
  DropDownButton,
  DropDownList,
  DropDownListContainer,
  DropDownListItem,
} from 'components/DropDown/DropDown.styles'
import dropdownarrow from 'images/dropdownarrow.svg'
import SVG from 'react-inlinesvg'

const DropDown = ({ DropDownButtonValue, DropDownButtonImg, DropDownButtonImgAlt, options }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropDown = () => setIsOpen(!isOpen)

  const onDropDownListItemClick = () => {
    setIsOpen(false)
  }

  return (
    <DropDownContainer>
      <DropDownButton onClick={toggleDropDown}>
        <SVG src={DropDownButtonImg} alt={DropDownButtonImgAlt}></SVG>
        <p>{DropDownButtonValue}</p>
        <SVG
          src={dropdownarrow}
          alt="dropdown arrow"
          style={{
            transform: isOpen ? 'rotate(180deg)' : '',
          }}
        ></SVG>
      </DropDownButton>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map(({ name, id }) => (
              <DropDownListItem onClick={onDropDownListItemClick} key={id}>
                {name}
              </DropDownListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  )
}

export default DropDown
