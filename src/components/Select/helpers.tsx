import React from 'react'

export default function getDisplayedValue(
  children: React.ReactNode,
  value: string | number | readonly string[] = '',
) {
  const childArray = React.Children.toArray(children) as React.ReactElement[]

  const selectedChild = childArray.find(child => child.props.value === value)

  return selectedChild?.props.children || ''
}
