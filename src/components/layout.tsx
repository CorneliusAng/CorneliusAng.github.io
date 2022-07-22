import * as React from 'react'
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

      <main>
        <h1>{children}</h1>
      </main>
    </div>
  )
}
export default Layout