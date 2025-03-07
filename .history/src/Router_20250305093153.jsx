import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Signup from './Pages/Auth/Signup'
import Payment from './Pages/Payment/Payment'
function Routing() {
  return (
    <Router>
      <routes>

        <Route path="/"  element={<Landing/>}   />
        <Route path="/auth"  element={<Signup/>}   />
        <Route path="/payments"  element={<Payment/>}   />
        <Route path="/orders"  element={<Landing/>}   />
        <Route path="/cart"  element={<Landing/>}   />

      </routes>

    </Router>
  )
}

export default Routing
