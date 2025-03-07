import React, {useState, useEffect} from 'react'
import ProductCard from './ProductCard';
import classes from './Product.module.css';
import axios from 'axios';

function Product() {
    const [products, setproducts] =useState()
 useEffect(()=>{
axios.get('https://fakestoreapi.com/products/')
.then((res)=>{
    /setproducts(res)
    // console.log(    setproducts(res)
)
})

 }, [])


  return (
    <div>
    </div>
  )
}

export default Product
