import React, {useState, useEffect} from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'



function ProductDetaile() {
  const [detailes, setDetails]=useState=([])
  const { productID }= useParams()
axios.get(`${productUrl}/products/${productID}`)
.then((res)=>)

  return (
    <LayOut>
      ProductDetaile
    </LayOut>
  )
}

export default ProductDetaile
