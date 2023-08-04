import type { Meta, StoryObj } from '@storybook/react'

import Select from '@/components/Select'

const meta: Meta<typeof Select> = {
  component: Select,
}

type Story = StoryObj<typeof Select>

export const Primary: Story = {
  render: () => (
    <Select id="filter-by" onChange={() => {}}>
      <option value="newest">Newest Releases</option>
      <option value="price">Price</option>
      <option value="curated">Curated</option>
    </Select>
  ),
}

export default meta
