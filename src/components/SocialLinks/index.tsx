import React from 'react'

import './style.scss'
interface SocialLinksProps {
  path: string
  tag: string
}

const SocialLinks: React.FC<SocialLinksProps> = ({ path, tag }) => {
  return (
    <div className="social">
      <a className="social__anchor" href={path}>
        <i className={tag} />
      </a>
    </div>
  )
}

export default SocialLinks
