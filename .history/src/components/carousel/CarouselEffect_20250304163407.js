import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import {img} from "./img/data"
import classes from './Carousel.module.css'
function CarouselEffect() {
  return (
    <div>
      <Carousel       
        autoPlay={true}
        infiniteLoop={false}
        showIndicators={false}
        showThumbs={false}
        >
            {
             img.map((imageitemLink)=>{
             <div> key={imageitemLink.id}
             return <img src={imageitemLink}/>
             }

             )
            }
      </Carousel>
      <div className={classes.hero_img}></div>
    </div>
  )
}

export default CarouselEffect
