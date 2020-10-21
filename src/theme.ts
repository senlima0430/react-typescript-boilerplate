import { extendTheme } from '@chakra-ui/core'

const overrides = {
  breakpoionts: ['576px', '768px', '1024px', '1200px'],
}

export const theme = extendTheme(overrides)
