import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { from "./img/data"}
function carousel() {
  return (
    <div>
      <carousel       
        autoPlay={tru}
        infiniteLoop={tru}
        showIndicators={tru}
        showThumbs={tru}
        >
            {
img

            }
      </carousel>
    </div>
  )
}

export default carousel
