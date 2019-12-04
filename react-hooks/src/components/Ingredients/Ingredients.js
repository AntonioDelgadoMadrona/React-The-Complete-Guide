import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';

function Ingredients() {

  const [ingredients, setIngredients] = useState([]);

  const addIngredient = ingredient => {
    setIngredients(prevIngredients => [
      ...prevIngredients,
      { id: Math.random().toString(), ...ingredient }
    ])
  };

  return (
    <div className="App">
      <IngredientForm addIngredient={addIngredient} />

      <section>
        <Search />
        <IngredientList ingredients={ingredients} />
      </section>
    </div>
  );
}

export default Ingredients;
