import React from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'

function Results() {
  const { categoryName } =useParams()

  // axios.get(`${productUrl}/products/category${categoryName}`)
  // .then((res)=>{
  //   console.log(res)
  // })
  // // console.log(categoryName) 
  // return (
    <LayOut>
      result
    </LayOut>
  )
}

export default Results
