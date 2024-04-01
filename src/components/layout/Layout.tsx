import React from 'react'
import Header from './Header'
import Footer from './Footer'

type LayoutComponentProps = {
    children: React.ReactNode
}

const Layout = ({children}:LayoutComponentProps) => {
  return (
    <>
    <Header/>
    <div className=' min-h-[700px]'>{children}</div>
    <Footer/>
    </>
    )
}

export default Layout