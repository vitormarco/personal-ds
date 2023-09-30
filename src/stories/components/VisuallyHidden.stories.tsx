import VisuallyHidden from '@/components/VisuallyHidden'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof VisuallyHidden> = {
  component: VisuallyHidden,
}

type Story = StoryObj<typeof VisuallyHidden>

export const Primary: Story = {
  render: () => <VisuallyHidden>Texto to readers</VisuallyHidden>,
}

export default meta
