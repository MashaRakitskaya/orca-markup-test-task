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
import PropTypes from 'prop-types'

const DropDown = ({ buttonTitle, buttonImg, buttonImgAlt, options, secondary }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropDown = () => setIsOpen(!isOpen)

  const onListItemClick = () => {
    setIsOpen(false)
  }

  return (
    <Container>
      <Button secondary={secondary} onClick={toggleDropDown}>
        <SVG src={buttonImg} alt={buttonImgAlt}></SVG>
        <Title secondary={secondary}>{buttonTitle}</Title>
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

DropDown.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  buttonImg: PropTypes.any.isRequired,
  buttonImgAlt: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string.isRequired, id: PropTypes.string.isRequired }),
  ).isRequired,
  secondary: PropTypes.bool,
}

DropDown.defaultProps = { secondary: false }

export default DropDown
