import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import {img} from "./img/data"
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
             img.map((imageitemLink)=>{
             return <img src={imageitemLink}/>
             }

             )
             
      </carousel>
    </div>
  )
}

export default carousel
