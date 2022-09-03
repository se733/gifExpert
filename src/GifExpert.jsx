import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpert = () => {

    const [categories, setCategories] = useState(['one punch'])

    const onAddCategory = () => {
        setCategories(['Valorant', ...categories])
    }

  return (
      <>
    <h1>Cambios</h1>

    
    <AddCategory onAddCategory={setCategories}/>

    <ol>
        {categories.map(category => {
            return <li key={category}>{category}</li>
        })}
    </ol>
      </>
    )
}
