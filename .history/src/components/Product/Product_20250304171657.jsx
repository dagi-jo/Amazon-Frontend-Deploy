import React, {useState, useEffect} from 'react'
import ProductCard from './ProductCard';
import classes from './Product.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
imort axios

function Product() {
    const [first, setfirst] =useState()
 useEffect(()=>{
axios.get('https://fakestoreapi.com/products/')
.then(res)
 },[])


  return (
    <div>
      ProductCard.map((prod)=>
    </div>
  )
}

export default Product
