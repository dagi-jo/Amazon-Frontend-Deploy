import React from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'

function ProductCard({singleProduct}) {
  return (
    <div>
      <a href=''>
        <img src='{singleProduct.image}' alt=''/>
      </a>
      <div>
        {/* <h3>'{singleProduct.title}'</h3> */}
                <h3>title</h3>

        <div>
            {/* {rating} */}
            <Rating value={5} percision={0.1}/>
            {/* {count} */}
            <small>{60}</small>
        </div>
        <div>
            {/* {price} */}
            <CurrencyFormat amount=
            
            {}/>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
