import React from 'react'

import './style.scss'

interface InformationProps {
  tag: string
  title: string
  description: string
}

const Information: React.FC<InformationProps> = ({
  tag,
  title,
  description
}) => {
  return (
    <div className="information">
      <i className={tag}></i>
      <div className="information__div">
        <span className="information__title">{title}</span>
        <span className="information__desc">{description}</span>
      </div>
    </div>
  )
}

export default Information
