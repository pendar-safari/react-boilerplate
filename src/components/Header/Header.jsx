import React from 'react'
import css from './Header.scss'
import { Link } from 'react-router-dom'
import Section from '@components/Section/Section'
import Logo from '@assets/img/react-logo.svg'

const Header = () => (
  <header className={css.header}>
    <Section>
      <div className={css['logo-wrapper']}>
        <Logo className={css.logo} />
        React Boilerplate
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="https://github.com/pendar-safari/react-boilerplate">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </Section>
  </header>
)

export default Header
