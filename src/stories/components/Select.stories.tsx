import type { Meta, StoryObj } from '@storybook/react'

import Select from '@/components/Select'

const meta: Meta<typeof Select> = {
  component: Select,
}

type Story = StoryObj<typeof Select>

export const Primary: Story = {
  render: () => (
    <Select id="filter-by" onChange={() => {}}>
      Teste
    </Select>
  ),
}

export default meta
