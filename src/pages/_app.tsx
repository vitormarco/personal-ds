import type { AppProps } from 'next/app'

import StyledComponentProvider from '@/providers/ThemeProvider'
import GlobalStyle from '@/styles/GlobalStyle'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledComponentProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </StyledComponentProvider>
  )
}
