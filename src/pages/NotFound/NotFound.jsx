import React from 'react'
import Section from '@components/Section/Section'
import css from './NotFound.scss'

const NotFound = () => (
  <Section className={css['not-found']}>
    <h1>404</h1>
    <p>
      <strong>Not found your target page</strong>
    </p>
  </Section>
)

export default NotFound
