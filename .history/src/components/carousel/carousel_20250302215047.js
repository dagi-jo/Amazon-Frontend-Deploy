import React from 'react'
import { Carousel } from 'react-responsive-carousel'
function carousel() {
  return (
    <div>
      <carousel>
        autoPlay(true)
        infiniteLoop=(true)
        showIndicators=false
      </carousel>
    </div>
  )
}

export default carousel
