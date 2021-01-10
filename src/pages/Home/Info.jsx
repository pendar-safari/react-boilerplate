import React from 'react'
import css from './Home.scss'

const Info = () => (
  <>
    <h1>
      <span>Light & Clear</span>
      <br />
      <span>ReactJs Boilerplate</span>
    </h1>

    <p className={css.info}>
      - ReactJs 16.13 <br />
      - Write SCSS & future CSS with PostCSS + preset-env <br />
      - SVG icons library <br />
      - Lint your code with ESLint & Stylelint <br />
      - Prettier for consistent code style <br />
      - Husky + lint-staged for code quality assurance <br />
      - Routing with react-router <br />
      - Editorconfig file for consistent indents <br />
      - Structure for use absolute path (scripts and styles) <br />
      - Assets management from loader <br />
      - Included example app to shows how this all works together <br />
    </p>

    <a
      className={css.button}
      href="https://github.com/pendar-safari/react-boilerplate"
    >
      more about
    </a>
  </>
)

export default Info
