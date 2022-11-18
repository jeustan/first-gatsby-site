import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const Homepage = () => {
  return (
    <Layout pageTitle='Home' pageHeading='Home'>
      <p>This is my tutorial page.</p>
      <StaticImage
        alt="Bright Light"
        src="../images/crow1.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home"/>

export default Homepage