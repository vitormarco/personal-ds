import {
  cleanup,
  render,
  RenderOptions,
  RenderResult,
} from '@testing-library/react'
import type { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { afterEach, vi } from 'vitest'

import theme from '@/styles/theme'

vi.mock('next/font/google', () => ({
  Roboto() {
    return {
      style: { fontFamily: 'sans-serif' },
    }
  },
}))

afterEach(() => {
  cleanup()
})

const customRender = (
  ui: ReactElement,
  options: RenderOptions = {},
): RenderResult =>
  render(ui, {
    wrapper: ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    ),
    ...options,
  })

export * from '@testing-library/react'
export { customRender as render }

export { default as userEvent } from '@testing-library/user-event'
