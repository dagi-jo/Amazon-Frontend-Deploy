import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Payment from './Pages/Payment/Payment'
import Cart from './Pages/Cart/Cart'
import Orders from './Pages/Orders/Orders'
import SignIn from './Pages/Auth/SignIn'
import ProductDetaile from './Pages/ProductDetaile/ProductDetaile'
import Results from './Pages/Results/Results'
function Routing() {
  return (
    <Router>
      <Routes>

        <Route path="/"  element={<Landing/>}   />
        <Route path="/auth"  element={<SignIn/>}   />
        <Route path="/payments"  element={<Payment/>}   />
        <Route path="/orders"  element={<Orders/>}   />
        <Route path="/cart"  element={<Cart/>}   />
        <Route path="/productdetaile"  element={<ProductDetaile/>}   />
        <Route path="/category/:categoryName"  element={<Results/>}   />/products/category/${categoryName}



      </Routes>

    </Router>
  )
}

export default Routing
