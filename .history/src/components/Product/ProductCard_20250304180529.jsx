import React from 'react'
import Rating from ''

function ProductCard({singleProduct}) {
  return (
    <div>
      <a href=''>
        <img src={singleProduct.image} alt=''/>
      </a>
      <div>
        <h3>{singleProduct.title}</h3>
        <div>
            {/* {rating}
            {price} */}
        </div>
        <div>
            {/* {price} */}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
