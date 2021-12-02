import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }) {
  return (
  <MoralisProvider appId='AHAb78HD76W6QulZ2lim1hdfaXqfX1EL1YUtJxkX' serverUrl='https://7qivt7yycweo.usemoralis.com:2053/server'>
  <Component {...pageProps} />
  </MoralisProvider>
  )
}

export default MyApp;