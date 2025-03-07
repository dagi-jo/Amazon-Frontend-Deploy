import React, { useContext } from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from './Product.module.css'
import { Link } from 'react-router-dom'
import { DataContext } from '../DataProvider/DataProvider'
import { type } from 'ut'


function ProductCard({product, flex, renderDesc}) {
    const { image, title, id, rating, price, description } = product;
  const [state, dispatch]= useContext(DataContext)
console.log(state)
 const addToCart=()=>{
  dispatch({
    type:Type.ADD_TO_BASKET,
    item:{
      image, title, id, rating, price, description
    }
  })
}





  return (
    <div className={`${classes.card_container} ${flex?classes.product_flexed:''}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt='' className={classes.img_container}/>
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc &&<div style={{maxWidth:"750px"}}>{description}</div>}
                {/* <h3>title</h3> */}

        <div className={classes.rating}>
            {/* {rating} */}
            <Rating value={rating?.rate || 0} percision={0.1}/>
            {/* {count} */}
            <small>{rating?.count || 0}</small>
        </div>
        <div>
            <CurrencyFormat amount={price}/>
        </div>
        <button className={classes.button}>
            Add to cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
