import React from 'react'
import Link from 'next/link'
import DefaultLayout from '../components/DefaultLayout'

const About: React.FC = () => {
  return (
    <DefaultLayout>
      <h1>About Page</h1>
      <Link href="/">
        <button>To Home</button>
      </Link>
    </DefaultLayout>
  )
}

export default About
