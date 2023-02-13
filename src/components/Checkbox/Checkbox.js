import React from 'react'
import { CheckboxContainer, Input, Label } from 'components/Checkbox/Checkbox.styles'
import checkmark from 'images/checkmark.svg'

const Checkbox = ({ label, id }) => {
  return (
    <CheckboxContainer>
      <Input checkmark={`url(${checkmark})`} type="checkbox" id={id} />
      <Label htmlFor={id}>{label}</Label>
    </CheckboxContainer>
  )
}

export default Checkbox
