import React from 'react'
import { Router } from '@reach/router'

import { Landing } from '@/pages/Landing'

export function Routes() {
  return (
    <Router>
      <Landing path="/" />
    </Router>
  )
}
