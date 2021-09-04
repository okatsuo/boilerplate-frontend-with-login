import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://katsuo-boilerplate-api.herokuapp.com/',
  cache: new InMemoryCache()
})

export default client
