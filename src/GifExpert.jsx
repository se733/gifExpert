import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpert = () => {

    const [categories, setCategories] = useState(['one punch','dragon ball'])

    const onAddCategory = () => {
        setCategories([...categories, 'Pokemon'])
    }

  return (
      <>
    <h1>Cambios</h1>

    
    <AddCategory />

    <button onClick={onAddCategory}>Agregar</button>
    <ol>
        {categories.map(category => {
            return <li key={category}>{category}</li>
        })}
    </ol>
      </>
    )
}
