import React from 'react'
import { Carousel } from 'react-responsive-carousel'
function carousel() {
  return (
    <div>
      <carousel        autoPlay(true)
        infiniteLoop=(true)
        showIndicators=(true)
        showThumbs=(true)
      </carousel>
    </div>
  )
}

export default carousel
