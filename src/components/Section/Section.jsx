import React from 'react'
import css from './Section.scss'

const Section = (props) => {
  const { children, className } = props

  return (
    <section className={`${css.section} ${className || ''}`}>
      <div>{children}</div>
    </section>
  )
}

export default Section
