import React, {useState, useEffect} from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../components/Product/ProductCard'
//import classes from './ProductDetaile.module.css'

function ProductDetaile() {
  const [product, setProduct]=useState({})
  const [isLoading, setisLoading]= useState(false)
  const { productID }= useParams()
  useEffect(()=>{
    setisLoading(true)
    axios.get(`${productUrl}/products/${productID}`)
    .then((res)=>{
      
      setProduct(res.data)
      // console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  })


  return (
    <LayOut>
<ProductCard 
product={product}
/>
    </LayOut>
  )
}

export default ProductDetaile
