import React from 'react'
import { BrowserRouter as Router, Routes, Route, redirect } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Payment from './Pages/Payment/Payment'
import Cart from './Pages/Cart/Cart'
import Orders from './Pages/Orders/Orders'
import ProductDetaile from './Pages/ProductDetaile/ProductDetaile'
import Results from './Pages/Results/Results'
import Auth from './Pages/Auth/Auth'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
const stripePromise = loadStripe(
  'pk_test_51R2IaHFLWmQe58Ja88RnVdRtlWbSvKqlqgw7xSe3ZRKM0Nr2cpiHbqvja4NbRYG8UAlnJlzwXTe9eGh9akQrIogi00JYedieVe');

function Routing() {
  return (
    <Router>
      <Routes>

        <Route path="/"  element={<Landing/>}   />
        <Route path="/Auth"  element={<Auth />}   />
        <Route path="/payments"  element={
          <ProtectedRoute
           msg={"you must log in to pay"} 
          redirect={"/payments"}>
          <Elements stripe={stripePromise}>
            <Payment/>
          </Elements>
          </ProtectedRoute>

          
          }   />
        <Route path="/orders"  element={
          <ProtectedRoute
           msg={"you must log in to access your orders"} 
           redirect={"/Orders"}
           >
            <Orders/>
            </ProtectedRoute>
        }/>
        <Route path="/cart"  element={<Cart/>}   />
        <Route path="/products/:productID"  element={<ProductDetaile/>}   />
        <Route path="/category/:categoryName"  element={<Results/>}   />



      </Routes>

    </Router>
  )
}

export default Routing
