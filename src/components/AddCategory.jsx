import { useState } from "react";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState();

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };


  const onSubmit = (e) => {
    e.preventDefault()
    setCategories(categories => [inputValue, ...categories])
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
 