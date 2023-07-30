import { beforeEach, describe, expect, it, vi } from 'vitest'

import VisuallyHidden from '@/components/VisuallyHidden'
import { render, screen, userEvent } from '@/utils/tests'

const TEXT = 'description for screen readers'

describe('#VisuallyHidden', () => {
  const { env } = process

  beforeEach(() => {
    vi.resetModules()
    process.env = { ...env }
  })

  it('should be able to render an VisuallyHidden', () => {
    render(<VisuallyHidden>description for screen readers</VisuallyHidden>)

    expect(screen.getByText(TEXT)).toBeTruthy()
  })

  it('should be able to show text in development', async () => {
    render(<VisuallyHidden>description for screen readers</VisuallyHidden>)

    await userEvent.keyboard('{Alt>}')

    const divElement = screen.queryByText(TEXT)

    expect(divElement?.classList.value).toBe('')
  })

  it('should be able to hidden text in development', async () => {
    render(<VisuallyHidden>description for screen readers</VisuallyHidden>)

    await userEvent.keyboard('{Alt>1/}')

    const divElement = screen.queryByText(TEXT)

    expect(divElement?.classList.value).not.toBe('')
  })

  it('should not be able to hidden text in production', async () => {
    process.env = {
      NODE_ENV: 'production',
    }

    render(<VisuallyHidden>description for screen readers</VisuallyHidden>)
    await userEvent.keyboard('{Alt>1}')

    const divElement = screen.queryByText(TEXT)

    expect(divElement?.classList.value).not.toBe('')
  })
})
