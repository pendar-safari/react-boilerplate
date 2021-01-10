import React, { cloneElement } from 'react'
import css from './Skeleton.scss'

const Skeleton = (props) => {
  const { type, width, height, className = '', count } = props

  const generateChild = (attrs) => {
    return (
      <span
        className={`${className} ${css.skeleton} ${
          css[attrs?.type || type] || ''
        }`}
        style={{
          width: `${attrs?.width || width}`,
          height: `${attrs?.height || height}`,
        }}
      />
    )
  }

  const listItem = (
    <div
      className={css['skeleton-list-item']}
      style={{
        width: `${width}`,
      }}
    >
      {generateChild({ width: '50px', height: '50px', type: 'circle' })}
      <div>
        {generateChild({ width: '70%' })}
        {generateChild({ width: '40%' })}
      </div>
    </div>
  )

  const content = () => {
    let domElement

    switch (type) {
      case 'listItem':
        domElement = listItem
        break

      case 'H1':
        domElement = generateChild({ height: '50px' })
        break

      case 'H2':
        domElement = generateChild({ height: '30px' })
        break

      default:
        domElement = generateChild()
    }

    if (count) {
      const dataArray = []

      for (let i = 0; i < count; i += 1) {
        dataArray.push(
          cloneElement(domElement, { ...domElement.props, key: i })
        )
      }

      domElement = dataArray
    }

    return domElement
  }

  return content()
}

export default Skeleton
