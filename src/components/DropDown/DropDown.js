import React, { useState } from 'react'
import {
  DropDownContainer,
  DropDownButton,
  DropDownList,
  DropDownListContainer,
  DropDownListItem,
  DropDownArrowWrapper,
} from 'components/DropDown/DropDown.styles'
import dropdownArrow from 'images/dropdownarrow.svg'
import SVG from 'react-inlinesvg'

const DropDown = ({
  DropDownButtonTitle,
  DropDownButtonImg,
  DropDownButtonImgAlt,
  options,
  secondary = false,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropDown = () => setIsOpen(!isOpen)

  const onDropDownListItemClick = () => {
    setIsOpen(false)
  }

  return (
    <DropDownContainer>
      <DropDownButton secondary={secondary} onClick={toggleDropDown}>
        <SVG src={DropDownButtonImg} alt={DropDownButtonImgAlt}></SVG>
        <p>{DropDownButtonTitle}</p>
        <DropDownArrowWrapper isOpen={isOpen}>
          <SVG src={dropdownArrow} alt="dropdown arrow"></SVG>
        </DropDownArrowWrapper>
      </DropDownButton>
      {isOpen && (
        <DropDownListContainer secondary={secondary}>
          <DropDownList>
            {options.map(({ name, id }) => (
              <DropDownListItem secondary={secondary} onClick={onDropDownListItemClick} key={id}>
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
