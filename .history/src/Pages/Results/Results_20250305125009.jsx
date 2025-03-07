import React, {useState, useEffect} from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'

function Results() {
  const [results, setResults] = useState([])
  const { categoryName } =useParams()

  // axios.get(`${productUrl}/products/category${categoryName}`)
  // .then((res)=>{
  //   console.log(res)
  // })
  // // console.log(categoryName) 
  useEffect(() => {
    axios.get(`${productUrl}/products/category/${categoryName}`)
    .then((res)=>{
      setResults(res.data)
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
    },[] )


  return (
    <LayOut>
      result
    </LayOut>
  )
}

export default Results
