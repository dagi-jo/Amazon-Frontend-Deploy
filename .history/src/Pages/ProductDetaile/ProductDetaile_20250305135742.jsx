import React, {useState, useEffect} from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'

function ProductDetaile() {
  const [detailes, setDetails]=useState=([])
  const { productID }= useParams()
  useEffect(()=>{
    axios.get(`${productUrl}/products/${productID}`)
    .then((res)=>{
      setDetails(res.data)
      console.log(res)
    }).catch(()=>{
      console.log
    })
  })


  return (
    <LayOut>
      ProductDetaile
    </LayOut>
  )
}

export default ProductDetaile
