import * as React from 'react'
import { Link } from 'gatsby'
import Navbar from '../components/navbar'
interface layoutProps {
  pageTitle: String;
  children: React.ReactNode;
}

const Layout = ({ pageTitle, children }: layoutProps) => {
  return (
    <div>
      <Navbar/>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default Layout