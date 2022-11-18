import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const Another = () => {
  return (
      <Layout pageTitle="Another Page" pageHeading="Another Page">
        <p>This is another page.</p>
      </Layout>
  )
}

export const Head = () => <Seo title="Another Page" />

export default Another