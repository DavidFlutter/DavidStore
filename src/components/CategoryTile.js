import React from 'react'

const CategoryTile = ({category}) => {
    const {id, title, imageUrl} = category
  return (
    <div key={id} className="category-container">
        <div className="category-container-image">
            <img src={imageUrl} alt="" />
        </div>
        <div className="category-container-body">
            <h2>{title}</h2>
            <p>Shop now</p>
        </div>
    </div>
  )
}

export default CategoryTile