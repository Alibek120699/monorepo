import React from 'react'
import {
  ChakraProvider,
  extendTheme,
  ChakraProviderProps
} from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      100: '#f7fafc',
      // ...
      900: '#1a202c'
    }
  }
})

export function ThemeProvider(props: ChakraProviderProps) {
  const { children, ...restProps } = props
  return (
    <ChakraProvider theme={theme} {...restProps}>
      {children}
    </ChakraProvider>
  )
}
