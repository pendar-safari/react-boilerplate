import * as React from 'react'
import css from './Icon.scss'
import * as icons from './icons'
import colors from '@constants/colors'

const Icon = ({ name, size, color = colors.body }) => {
  const IconComponent = icons[name]

  return (
    <span className={`${css.icon} ${size}`}>
      <IconComponent fill={color} />
    </span>
  )
}

export default Icon
