import React, {useState, useEffect} from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from ''

function Results() {
  const { categoryName } =useParams()

  // axios.get(`${productUrl}/products/category${categoryName}`)
  // .then((res)=>{
  //   console.log(res)
  // })
  // // console.log(categoryName) 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${productUrl}/products/category/${categoryName}`);
        console.log('API Response:', response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [categoryName]);

  return (
    <LayOut>
      result
    </LayOut>
  )
}

export default Results
