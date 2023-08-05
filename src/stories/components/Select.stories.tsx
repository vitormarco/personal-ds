import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import Select from '@/components/Select'

const meta: Meta<typeof Select> = {
  component: Select,
}

type Story = StoryObj<typeof Select>

export const ManagedSelect = () => {
  const [value, setValue] = React.useState('newest')

  return (
    <Select id="filter-by" label="" value={value} onChange={setValue}>
      <option value="newest">Newest Releases</option>
      <option value="price">Price</option>
      <option value="curated">Curated</option>
    </Select>
  )
}

export const Primary: Story = {
  render: () => <ManagedSelect />,
}

export default meta
