import React from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Results() {
  const { categoryName } =useParams()
  
  // console.log(categoryName) 
  return (
    <LayOut>
      result
    </LayOut>
  )
}

export default Results
