import type { Meta, StoryObj } from '@storybook/react'

import TextInput from '@/components/TextInput'

const meta: Meta<typeof TextInput> = {
  component: TextInput,
}

export default meta
type Story = StoryObj<typeof TextInput>

export const Primary: Story = {
  render: () => <TextInput />,
}
