import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

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

            categories.map(category => {
                <div key={category}>
                    <h3>{category}</h3>
                    <li>{category}</li>
                </div>
            })
        }
    </ol>
      </>
    )
}
