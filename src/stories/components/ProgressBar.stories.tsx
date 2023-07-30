import type { Meta, StoryObj } from '@storybook/react'

import ProgressBar from '@/components/ProgressBar'

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  argTypes: {
    progress: {
      defaultValue: 0,
      type: 'number',
    },
    size: {
      defaultValue: 'large',
    },
  },
}

export default meta
type Story = StoryObj<typeof ProgressBar>

export const Primary: Story = {
  render: ({ progress, size }) => (
    <ProgressBar progress={progress} size={size} />
  ),
}
