import React from 'react'
import CarouselEffect from '../../components/Carousel/CarouselEffect';
import Category from '../../components/Category/Category'
import Product from '../../components/Product/Product'
import LayOut from '../../components/LayOut/LayOut'
import useReducerH from '../../components/useReducerH/'

function Landing() {
  return (
    <LayOut>
       <CarouselEffect />
       <Category />
        <Product />
        <useReducerH />
    </LayOut>
  )
}

export default Landing
