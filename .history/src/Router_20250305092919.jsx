import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
function Routing() {
  return (
    <Router>
      <routes>

        <Route path="/"  element={<Landing/>}   />
        <Route path="/"  element={<Landing/>}   />
        <Route path="/"  element={<Landing/>}   />
v
      </routes>

    </Router>
  )
}

export default Routing
