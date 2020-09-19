import React from 'react'

import './style.scss'

interface InformationProps {
  img: string
  title: string
  description: string
}

const Information: React.FC<InformationProps> = ({
  img,
  title,
  description
}) => {
  return (
    <div className="information">
      <img className="information__img" src={img} alt="" />
      <div className="information__div">
        <span className="information__title">{title}</span>
        <span className="information__desc">{description}</span>
      </div>
    </div>
  )
}

export default Information
