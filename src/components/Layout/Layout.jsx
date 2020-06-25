import React from 'react'
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import css from './Layout.scss'

const Layout = ({ children }) => (
  <div className={css.layout}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
