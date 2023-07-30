import type { Preview } from '@storybook/react'

import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import GlobalStyle from '@/styles/GlobalStyle'
import theme from '@/styles/theme'
import StyledComponentProvider from '@/providers/ThemeProvider'

const GlobalStyles = GlobalStyle

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export const decorators = [
  withThemeFromJSXProvider({
    themes: theme,
    Provider: StyledComponentProvider,
    GlobalStyles,
  }),
]
