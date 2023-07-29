import React, { useEffect, useState } from 'react'

import Wrapper from './styles'

interface IVisuallyHiddenProperties {
  children: React.ReactNode
}

const VisuallyHidden = ({ children }: IVisuallyHiddenProperties) => {
  const [forceShow, setForceShow] = useState(false)

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Alt') {
          setForceShow(true)
        }
      }

      const handleKeyUp = () => {
        setForceShow(false)
      }

      window.addEventListener('keydown', handleKeyDown)
      window.addEventListener('keyup', handleKeyUp)

      return () => {
        window.removeEventListener('keydown', handleKeyDown)
        window.removeEventListener('keyup', handleKeyUp)
      }
    }

    return () => {}
  }, [])

  if (forceShow) {
    return children
  }

  return <Wrapper>{children}</Wrapper>
}

export default VisuallyHidden
