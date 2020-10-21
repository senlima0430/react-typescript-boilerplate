import React from 'react'
import { useSelector } from 'react-redux'
import { RouteComponentProps } from '@reach/router'
import { Box, Flex, Image } from '@chakra-ui/core'

import logo from '@/assets/logo.svg'
import { RootState } from '@/redux'
import { AddTodo } from '@/components/AddTodo'
import { ColorModeButton } from '@/components/ColorModeButton'

export function Landing(props: RouteComponentProps) {
  const todoList = useSelector((state: RootState) => state.todos)

  return (
    <Flex
      mx="auto"
      width="75%"
      maxWidth="768px"
      height="100vh"
      direction="column"
    >
      <Flex flex="none" height="120px" align="center" justify="flex-end">
        <ColorModeButton />
      </Flex>
      <Box flex="auto" height="100%">
        <Image
          className="spin"
          mx="auto"
          boxSize="200px"
          src={logo}
          alt="react"
        />
        <Box
          mx="auto"
          width={{ base: '75%', md: '50%' }}
          maxWidth="768px"
          position="relative"
        >
          <AddTodo />
          {todoList.length !== 0 &&
            todoList.map(item => <p key={item.id}>{item.text}</p>)}
        </Box>
      </Box>
    </Flex>
  )
}
