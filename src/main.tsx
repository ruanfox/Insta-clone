import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'
import { CSSObject } from '@emotion/react'

interface GlobalStylesProps {
  colorMode: string;
}

type GlobalStylesFunction = (props: GlobalStylesProps) => CSSObject;

const styles: { global: GlobalStylesFunction } = {
  global:(props) => ({
    body:{
      bg: mode("gray.100", "#000")(props),
      color: mode("gray.800","whiteAlpha.900")(props),
    }
  })
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config , styles})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>   
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
