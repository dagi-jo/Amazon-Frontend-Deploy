import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import {img} from "./img/data"
function Carousel() {
  return (
    <div>
      <Carousel       
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
            }
      </Carousel>
    </div>
  )
}

export default Carousel
