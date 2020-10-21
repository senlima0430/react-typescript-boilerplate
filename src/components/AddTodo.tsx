import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FormControl, FormLabel, Input, Button, Flex } from '@chakra-ui/core'

import { addTodo } from '@/redux/reducers/todos'

export function AddTodo() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  function handleChangeText(e: React.FormEvent<HTMLInputElement>) {
    setText(e.currentTarget.value)
  }

  function handleSubmit() {
    dispatch(addTodo(text))
  }

  return (
    <>
      <FormControl>
        <FormLabel htmlFor="add-todo">Have somthing to do?</FormLabel>
        <Flex
          width="100%"
          gridGap="8px"
          wrap={{
            base: 'wrap',
            md: 'nowrap',
          }}
        >
          <Input
            type="text"
            flex="auto"
            width="calc(100% - 63px)"
            id="add-todo"
            value={text}
            onChange={handleChangeText}
          />
          <Button
            flex="none"
            width="63px"
            disabled={text.length === 0}
            onClick={handleSubmit}
          >
            Add
          </Button>
        </Flex>
      </FormControl>
    </>
  )
}
