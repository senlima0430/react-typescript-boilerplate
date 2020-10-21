import React from 'react'
import { ChakraProvider } from '@chakra-ui/core'

import '@/css/index.css'
import { theme } from '@/theme'
import { Routes } from '@/Routes'

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  )
}
