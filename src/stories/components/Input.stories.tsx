import type { Meta, StoryObj } from '@storybook/react'

import Input from '@/components/Input'

const meta: Meta<typeof Input> = {
  component: Input,
}

export default meta
type Story = StoryObj<typeof Input>

export const Primary: Story = {
  render: () => <Input />,
}
