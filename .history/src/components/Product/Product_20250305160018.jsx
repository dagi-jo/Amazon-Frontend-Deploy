import React, {useState, useEffect} from 'react'
import ProductCard from './ProductCard';
import classes from './Product.module.css';
import axios from 'axios';
import Loder from '../Loder/Loder';

function Product() {
    const [products, setproducts] = useState([])
    const [isLoading, setisLoading]= useState(false)
    
    
 useEffect(()=>{
    setisLoading(true)
axios.get('https://fakestoreapi.com/products/')
.then((res)=>{
    setproducts(res.data)
    console.log(res)
    setisLoading(false)

}).catch((err)=>{
    console.log(err)
    setisLoading(false)

})

 }, [])


  return (
    <>
    {
        isLoading? (<Loder/>): ()
    }
   
 </>
  )
}

export default Product
