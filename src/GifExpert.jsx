import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpert = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories])
    }

  return (
      <>
    <h1>Cambios</h1>

    
    <AddCategory onNewCategory={onAddCategory}/>

    <ol>
        {

            categories.map(category => (
                  <GifGrid key={category} category={category}/>
                )
            )
        }
    </ol>
      </>
    )
}
