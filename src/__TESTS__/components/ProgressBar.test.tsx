import { describe, expect, it } from 'vitest'

import ProgressBar from '@/components/ProgressBar'
import { render, screen } from '@/utils/tests'

describe('#Progress bar', () => {
  it('should be able to render an Progress bar', () => {
    const { getByText } = render(<ProgressBar progress={20} />)

    expect(getByText('20%')).toBeTruthy()
  })

  it('should not be able to display a percentage above 100', () => {
    render(<ProgressBar progress={120} />)
    const { queryByText } = screen

    expect(queryByText('120%')).toBeNull()
  })

  it('should not be able to display a percentage below 0', () => {
    render(<ProgressBar progress={-20} />)
    const { queryByText } = screen

    expect(queryByText('-20%')).toBeNull()
  })
})
