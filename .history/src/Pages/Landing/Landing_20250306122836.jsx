import React from 'react'
import CarouselEffect from '../../components/Carousel/CarouselEffect';
import Category from '../../components/Category/Category'
import Product from '../../components/Product/Product'
import LayOut from '../../components/LayOut/LayOut'
import ComponentA from '../../components/useReducerH/ComponentA';
// import useReducerH from '../../components/useReducerH/useReducerH.js'
// import ContextApI from '../../components/useReducerH/Contextapi.js'

function Landing() {
  return (
    <LayOut>
       <CarouselEffect />
       <Category />
        <Product />
        {/* <useReducerH /> */}
        {/* <ContextApI /> */}
        <ComponentA/>
        </
    </LayOut>
  )
}

export default Landing
