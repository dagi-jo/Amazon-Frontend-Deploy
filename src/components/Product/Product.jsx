import React, {useState, useEffect} from 'react'
import ProductCard from './ProductCard';
import classes from './Product.module.css';
import axios from 'axios';
import Loder from '../Loder/Loder';

function Product() {
    const [products, setproducts] = useState([])
    const [isLoading, setisLoading]= useState(true)
    
    
 useEffect(()=>{
axios.get('https://fakestoreapi.com/products/')
.then((res)=>{
    setproducts(res.data)
    // console.log(res)

}).catch((err)=>{
    console.log(err)

}).finally(()=>{
    setisLoading(false)

  })

 }, [])


  return (
    <>
    
       
         <section className={classes.product_container}>
            
                    {isLoading? (<Loder/>) : (products.map((singleProduct)=> { 
                    return <ProductCard renderAdd={true} product={singleProduct} key={singleProduct.id} />
    
                }))
            }
                
        </section>

   
 </>
  )
}

export default Product
