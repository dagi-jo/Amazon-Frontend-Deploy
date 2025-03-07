import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import {img} from "./img/data"
function CarouselEffect() {
  return (
    <div>
      <Carousel       
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={fa}
        showThumbs={true}
        >
            {
             img.map((imageitemLink)=>{
             return <img src={imageitemLink}/>
             }

             )
            }
      </Carousel>
    </div>
  )
}

export default CarouselEffect
