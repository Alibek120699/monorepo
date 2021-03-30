import React from 'react'
import { Box as ChakraBox, BoxProps as ChakraBoxProps } from '@chakra-ui/react'

interface BoxProps extends ChakraBoxProps {
  children: any
}

export function Box(props: BoxProps) {
  const { children, ...restProps } = props

  return (
    <ChakraBox bg='tomato' w='100%' p={4} color='white' {...restProps}>
      {children}
    </ChakraBox>
  )
}
