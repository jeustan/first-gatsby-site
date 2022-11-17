import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
} from './layout.module.css'

const Layout = ({pageTitle, pageHeading, children}) => {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/another'>Another</Link></li>
        </ul>
      </nav>
      <h1 className={heading}>{pageHeading}</h1>
      {children}
    </main>
  )
}

export default Layout