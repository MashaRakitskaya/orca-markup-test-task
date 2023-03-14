import React, { useState } from 'react'
import {
  Container,
  Button,
  List,
  ListContainer,
  ListItem,
  ArrowWrapper,
  Title,
} from 'components/DropDown/DropDown.styles'
import dropdownArrow from 'images/dropdownarrow.svg'
import SVG from 'react-inlinesvg'

const DropDown = ({ ButtonTitle, ButtonImg, ButtonImgAlt, options, secondary = false }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropDown = () => setIsOpen(!isOpen)

  const onListItemClick = () => {
    setIsOpen(false)
  }

  return (
    <Container>
      <Button secondary={secondary} onClick={toggleDropDown}>
        <SVG src={ButtonImg} alt={ButtonImgAlt}></SVG>
        <Title secondary={secondary}>{ButtonTitle}</Title>
        <ArrowWrapper isOpen={isOpen}>
          <SVG src={dropdownArrow} alt="dropdown arrow"></SVG>
        </ArrowWrapper>
      </Button>
      {isOpen && (
        <ListContainer secondary={secondary}>
          <List>
            {options.map(({ name, id }) => (
              <ListItem secondary={secondary} onClick={onListItemClick} key={id}>
                {name}
              </ListItem>
            ))}
          </List>
        </ListContainer>
      )}
    </Container>
  )
}

export default DropDown
