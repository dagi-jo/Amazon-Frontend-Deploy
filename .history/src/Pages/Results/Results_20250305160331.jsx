import React, {useState, useEffect} from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import classes from './Results.module.css'
import ProductCard from '../../components/Product/ProductCard'
import Loder from '../../components/Loder/Loder'

function Results() {
  const [results, setResults] = useState([])
  const { categoryName } =useParams()
  const [isLoading, setisLoading]= useState(false)

   useEffect(() => {
    setisLoading(true)
    axios.get(`${productUrl}/products/category/${categoryName}`)
    .then((res)=>{
      setResults(res.data)
      // console.log(res.data)
      setisLoading(false)

    }).catch((err)=>{
      console.log(err)
      setisLoading(false)

    })
    },[] )


  return (
    <LayOut>
      {
        isLoading? (<Loder/>) :
      }
     

  
    </LayOut>
  )
}

export default Results
