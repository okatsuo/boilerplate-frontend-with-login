import type { AppProps } from 'next/app'
import GlobalStyle from '../../styles/global'
import theme from '../../styles/theme'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import client from '../graphql/client'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </ApolloProvider>
  )
}
export default MyApp
