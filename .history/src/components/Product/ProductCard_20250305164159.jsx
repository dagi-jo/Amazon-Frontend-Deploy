import React, {useState, useEffect} from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from './Product.module.css'
import { Link } from 'react-router-dom'


function ProductCard({product}) {
    const { image, title, id, rating, price} = product;
      const [isLoading, setisLoading]= useState(true)
    
  return (
    {
      isLoading? (<Loder/>): () 
    }
    
  )
}

export default ProductCard
