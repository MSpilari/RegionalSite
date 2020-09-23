import React from 'react'
import Button from '../Button'

import './style.scss'

interface ContainerProps {
  title: string
  desc?: string
  isSpot?: boolean
}

const Container: React.FC<ContainerProps> = ({
  title,
  desc = '',
  children,
  isSpot = false
}) => {
  const styleContainer = isSpot ? { backgroundColor: '#f8f88c' } : null

  return (
    <div className="Container" style={styleContainer}>
      <h1 className="Container__title">{title}</h1>
      <div className="square"></div>
      <div className="Container__carrossel">
        <p className="Container__desc">{desc}</p>
        <hr />
        {children}
      </div>
      <Button label={'Ver todos'} />
    </div>
  )
}

export default Container
