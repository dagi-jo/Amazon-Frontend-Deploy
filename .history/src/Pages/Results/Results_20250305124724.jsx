import React, {useState, useEffect} from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'

function Results() {
  const [results, setResult] = useState([])
  const { categoryName } =useParams()

  // axios.get(`${productUrl}/products/category${categoryName}`)
  // .then((res)=>{
  //   console.log(res)
  // })
  // // console.log(categoryName) 
  useEffect(() => {
    axios.get(`${productUrl}/products/category/${categoryName}`)
    .then((res)=>{
      
    
    } }


  return (
    <LayOut>
      result
    </LayOut>
  )
}

export default Results
