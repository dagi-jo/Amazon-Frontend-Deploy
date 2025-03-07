import React from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'

function ProductCard({product}) {
    const { image, title, id, rating, price} = product;
  return (
    <div>
      <a href=''>
        <img src={image} alt=''/>
      </a>
      <div>
        <h3>{title}</h3>
                <h3>title</h3>

        <div>
            {/* {rating} */}
            <Rating value={rating.rate} percision={0.1}/>
            {/* {count} */}
            <small>{rating.count}</small>
        </div>
        <div>
            {price}
            <CurrencyFormat amount={price}/>
        </div>
        <button>
            Add to cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
