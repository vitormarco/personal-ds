import type { Meta, StoryObj } from '@storybook/react'

import ProgressBar from '@/components/ProgressBar'

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  args: {
    progress: 0,
    size: 'large',
  },
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
