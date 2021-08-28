import type { AppProps } from 'next/app'
import GlobalStyle from '../../styles/global'
import theme from '../../styles/theme'
import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
export default MyApp
