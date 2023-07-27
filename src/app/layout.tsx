import React from 'react'

import StyledComponentsRegistry from '@/lib/styledComponentsRegistry'

interface IRootLayoutProperties {
  children: React.ReactNode
}

const RootLayout = ({ children }: IRootLayoutProperties) => {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
}

export default RootLayout
