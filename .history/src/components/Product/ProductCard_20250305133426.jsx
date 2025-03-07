import React from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from './Product.module.css'
import 


function ProductCard({product}) {
    const { image, title, id, rating, price} = product;
  return (
    <div className={`${classes.card_container}`}>
      <a href=''>
        <img src={image} alt=''/>
      </a>
      <div>
        <h3>{title}</h3>
                <h3>title</h3>

        <div className={classes.rating}>
            {/* {rating} */}
            <Rating value={rating.rate} percision={0.1}/>
            {/* {count} */}
            <small>{rating.count}</small>
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
