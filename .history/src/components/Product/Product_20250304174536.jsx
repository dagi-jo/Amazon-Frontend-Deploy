import React, {useState, useEffect} from 'react'
import ProductCard from './ProductCard';
//import classes from './Product.module.css';
import axios from 'axios';

function Product() {
    const [products, setproducts] = useState()
 useEffect(()=>{
axios.get('https://fakestoreapi.com/products/')
.then((res)=>{
    setproducts(res.data)
    console.log(res)

}).catch((err)=>{
    console.log(err)
})

 }, [])


  return (
    <section>
        {
            product.map((singleProduct)=>{
                return <ProductCard product={singleProduct} key={singleProduct.id} />

            })
        }
    </section>
  )
}

export default Product
