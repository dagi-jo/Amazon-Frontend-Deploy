import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import {img} from "./img/data"
function CarouselEffect() {
  return (
    <div>
      <Carousel       
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={true}
        showThumbs={f}
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
