import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '@/styles/theme'

interface IStyledComponentProviderProperties {
  children: React.ReactNode
}

const StyledComponentProvider = ({
  children,
}: IStyledComponentProviderProperties) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default StyledComponentProvider
