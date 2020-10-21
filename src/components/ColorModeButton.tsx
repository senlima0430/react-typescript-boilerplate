import React from 'react'
import { useColorMode, Button } from '@chakra-ui/core'

export function ColorModeButton() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button onClick={toggleColorMode}>
      Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
    </Button>
  )
}
