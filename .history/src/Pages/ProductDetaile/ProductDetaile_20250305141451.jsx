import React, {useState, useEffect} from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../'

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
<section>
        <h1 style={{padding:"30px"}}>Product</h1>
        <p style={{padding:"30px"}}>Product </p>
        <hr />
        <div className={classes.product_container}>
          {results?.map((product)=>(
            <ProductCard 
            key={product.id}
            product={product}
               />
          )
          )}

        </div>
      </section>
    </LayOut>
  )
}

export default ProductDetaile
