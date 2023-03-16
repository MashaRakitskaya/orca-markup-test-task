import React from 'react'
import { Container, Input, Label } from 'components/Checkbox/Checkbox.styles'
import checkmark from 'images/checkmark.svg'
import PropTypes from 'prop-types'

const Checkbox = ({ label, id }) => {
  return (
    <Container>
      <Input checkmark={`url(${checkmark})`} type="checkbox" id={id} />
      <Label htmlFor={id}>{label}</Label>
    </Container>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default Checkbox
