import React from 'react'

import './style.scss'

interface SelectInputProps {
  nome: string
}

const SelectInput: React.FC<SelectInputProps> = ({ nome, children }) => {
  return (
    <select className="select" name={nome}>
      {children}
    </select>
  )
}

export default SelectInput
