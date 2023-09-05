import React from 'react'
import CategoryTile from './CategoryTile'

const CategoryList = ({containerList}) => {
  return (
    <div className="categories-container">
        {containerList.map(category => (
            <CategoryTile key={category.id} category={category}></CategoryTile>
        ))}
    </div>
  )
}

export default CategoryList