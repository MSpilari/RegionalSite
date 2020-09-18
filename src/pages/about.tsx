import React from 'react'
import Link from 'next/link'

const About: React.FC = () => {
  return (
    <>
      <h1>About Page</h1>
      <Link href="/">
        <button>To Home</button>
      </Link>
    </>
  )
}

export default About
