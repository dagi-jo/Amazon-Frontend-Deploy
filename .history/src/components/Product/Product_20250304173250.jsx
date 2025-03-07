import React, {useState, useEffect} from 'react'
import ProductCard from './ProductCard';
import classes from './Product.module.css';
import axios from 'axios';

function Product() {
    const [products, setproducts] =useState()
 useEffect(()=>{
axios.get('https://fakestoreapi.com/products/')
.then((res)=>{
    setproducts(res.data)
    // console.log(    setproducts(res)

}).catch((err)=>{
    console.log(err)
})

 }, [])


  return (
    <section>
        {
            products.map((singleProduct)={
                return <ProductCard product={psingleProduct}

            })
        }
    </section>
  )
}

export default Product
