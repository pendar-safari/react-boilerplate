import React from 'react'
import css from './Footer.scss'
import Section from '@components/Section/Section'
import Icon from '@components/Icon/Icon'
import colors from '@constants/colors'

const Footer = () => (
  <footer id={css.footer}>
    <Section>
      <div className={css.socials}>
        <a href="https://github.com/pendar-safari">
          <Icon name="github" color={colors.blue} />
        </a>
        <a href="https://www.linkedin.com/in/pendarsafari">
          <Icon name="linkedin" color={colors.blue} />
        </a>
        <a href="mailto: pendar.safari@gmail.com">
          <Icon name="email" color={colors.blue} />
        </a>
      </div>
      <span className={css.copywrite}>
        Idea from Pendar Safari
        <Icon name="person" color={colors.lightGray['1']} />
      </span>
    </Section>
  </footer>
)

export default Footer
