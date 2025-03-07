import React from 'react'
import classes from './Category.module.css'
import { Link } from 'react-router-dom'
function CategoryCard({data}) {
  return (
    <div className={classes.category}>
      <Link to={'/category/${data.name}`}>
        
        <span> {data.name}</span>
        <img src={data.imgLink} alt=''></img>
        <p>show me</p>
      </Link>
    </div>
  )
}

export default CategoryCard
