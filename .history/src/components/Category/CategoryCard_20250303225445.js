import React from 'react'

function CategoryCard(data) {
  return (
    <div>
      <a href=''>
        <span> {data.title}</span>
        <img src={data.imgLink} alt=''></img>
        <p>{}shop now</p>
      </a>
    </div>
  )
}

export default CategoryCard
