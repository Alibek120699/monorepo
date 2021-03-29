import React from 'react'
import { Box as ChakraBox } from '@chakra-ui/react'

export function Box({ children }: any) {
  return (
    <ChakraBox bg='tomato' w='100%' p={4} color='white'>
      {children}
    </ChakraBox>
  )
}
