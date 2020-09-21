import React, { InputHTMLAttributes } from 'react'

import './style.scss'
type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = ({ ...rest }) => {
  return <input {...rest} className="input" />
}

export default Input
