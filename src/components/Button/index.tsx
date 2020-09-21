import React, { ButtonHTMLAttributes } from 'react'

import './style.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

const Button: React.FC<ButtonProps> = ({ label, ...rest }) => {
  return (
    <button {...rest} className="button">
      {label}
    </button>
  )
}
export default Button
