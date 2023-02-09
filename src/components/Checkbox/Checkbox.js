import React from 'react'
import { CheckboxContainer } from 'components/Checkbox/Checkbox.styles'
import checkmark from 'images/checkmark.svg'

const Checkbox = ({ label, id }) => {
  return (
    <CheckboxContainer checkmark={`url(${checkmark})`}>
      <input type="checkbox" id={id} />
      <label htmlFor={id}>{label}</label>
    </CheckboxContainer>
  )
}

export default Checkbox
