import { ChakraProvider, useColorMode } from '@chakra-ui/react'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  


  return (
    
    <ChakraProvider>
        
        <Component {...pageProps} />

    </ChakraProvider>
    
  )
}

export default MyApp