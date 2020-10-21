import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ColorModeScript } from '@chakra-ui/core'

import { App } from './App'
import { store } from './redux'

type colorOpt = 'light' | 'dark'
const mode = localStorage.getItem('chakra-ui-color-mode') as colorOpt

render(
  <Provider store={store}>
    <ColorModeScript initialColorMode={mode ? mode : 'light'} />
    <App />
  </Provider>,
  document.getElementById('root')
)
