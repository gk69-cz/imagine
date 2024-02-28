import React from 'react'

const Layout = ({children}:{children: React.ReactNode}) => {
  return (
    <main className='auth'>{children}</main>
  )
}

export default Layout


// layouts export the childeren and import shared ui  