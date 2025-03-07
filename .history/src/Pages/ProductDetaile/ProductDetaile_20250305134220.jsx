import React, {useState, useEffect} from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'


function ProductDetaile() {
  const [detailes, setDetails]=useState=([])
  const { productID }= useParams
  return (
    <LayOut>
      ProductDetaile
    </LayOut>
  )
}

export default ProductDetaile
