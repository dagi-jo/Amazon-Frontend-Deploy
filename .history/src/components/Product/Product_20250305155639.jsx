import React, {useState, useEffect} from 'react'
import ProductCard from './ProductCard';
import classes from './Product.module.css';
import axios from 'axios';

function Product() {
    const [products, setproducts] = useState([])
    const [isLoading, setisLoading]= useState(false)
    
    
 useEffect(()=>{
    setisLoading(true)
axios.get('https://fakestoreapi.com/products/')
.then((res)=>{
    setproducts(res.data)
    console.log(res)
    setisLoading(true)

}).catch((err)=>{
    console.log(err)
})

 }, [])


  return (
    <section className={classes.product_container}>
        {
            products.map((singleProduct)=>{
                return <ProductCard product={singleProduct} key={singleProduct.id} />

            })
        }
    </section>
  )
}

export default Product
