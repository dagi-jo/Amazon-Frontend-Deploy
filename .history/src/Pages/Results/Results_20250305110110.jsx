import React from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'

function Results() {
  const { categoryName } =useParams()
  console.log(categoryName) *2 ,'jewelery''
  return (
    <LayOut>
      result
    </LayOut>
  )
}

export default Results
