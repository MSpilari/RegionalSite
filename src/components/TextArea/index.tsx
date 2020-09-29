import React, { TextareaHTMLAttributes } from 'react'

import './style.scss'

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

const TextArea: React.FC<TextAreaProps> = ({ ...rest }) => {
  return <textarea {...rest} className="textarea"></textarea>
}

export default TextArea
