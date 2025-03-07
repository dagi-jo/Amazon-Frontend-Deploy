import React, {useState, useEffect} from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../components/Product/ProductCard'
import classes from './ProductDetaile.module.css'

function ProductDetaile() {
  const [detailes, setDetails]=useState([])
  const { productID }= useParams()
  useEffect(()=>{
    axios.get(`${productUrl}/products/${productID}`)
    .then((res)=>{
      setDetails(res.data)
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  })


  return (
    <LayOut>
<pr
    </LayOut>
  )
}

export default ProductDetaile
