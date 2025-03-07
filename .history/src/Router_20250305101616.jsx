import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Payment from './Pages/Payment/Payment'
import Cart from './Pages/Cart/Cart'
import Orders from './Pages/Orders/Orders'
import SignIn from './Pages/Auth/SignIn'
import ProductDetaile from './Pages/Auth/'
function Routing() {
  return (
    <Router>
      <Routes>

        <Route path="/"  element={<Landing/>}   />
        <Route path="/auth"  element={<SignIn/>}   />
        <Route path="/payments"  element={<Payment/>}   />
        <Route path="/orders"  element={<Orders/>}   />
        <Route path="/cart"  element={<Cart/>}   />
        <Route path="/ProductDetaile"  element={<ProductDetaile/>}   />
        <Route path="/cart"  element={<Cart/>}   />



      </Routes>

    </Router>
  )
}

export default Routing
