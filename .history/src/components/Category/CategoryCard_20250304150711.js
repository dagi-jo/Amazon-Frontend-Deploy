import React from 'react'
import classes from ''
import classes from './Category.module.css'
function CategoryCard({data}) {
  return (
    <div className={classes.category}>
      <a href=''>
        
        <span> {data.title}</span>
        <img src={data.imgLink} alt=''></img>
        <p>{data.name}</p>
      </a>
    </div>
  )
}

export default CategoryCard
