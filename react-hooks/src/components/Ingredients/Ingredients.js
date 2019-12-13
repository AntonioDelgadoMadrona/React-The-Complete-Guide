import React, { useState, useCallback, useReducer, useMemo } from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';

const ingredientReducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...state, action.ingredient];
    case 'DELETE':
      return state.filter(ing => ing.id !== action.id);

    default:
      throw new Error('Shoul not get there!');
  }
};

const httpReducer = (state, action) => {
  switch (action.type) {
    case 'SEND':
      return { ...state, loading: true, error: null };
    case 'RESPONSE':
      return { ...state, loading: false };
    case 'ERROR':
      return { ...state, loading: false, error: action.errorData };
    case 'CLEAR':
      return { ...state, error: null };

    default:
      throw new Error('Shoul not get there!');
  }
};

const Ingredients = () => {

  const [ingredients, dispatch] = useReducer(ingredientReducer, []);
  // const [ingredients, setIngredients] = useState([]);
  const [httpState, dispatchHttp] = useReducer(httpReducer, { loading: false, error: null })
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);

  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    // setIngredients(filteredIngredients);
    dispatch({ type: 'SET', ingredients: filteredIngredients });
  }, []);

  const addIngredient = useCallback(ingredient => {
    // setIsLoading(true);
    dispatchHttp({ type: "SEND" });
    fetch('https://react-hooks-update-f5a88.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(responseData => {
        // setIsLoading(false);
        // setIngredients(prevIngredients => [
        //   ...prevIngredients,
        //   { id: responseData.name, ...ingredient }
        // ]);
        dispatchHttp({ type: "RESPONSE" });
        dispatch({ type: 'ADD', ingredient: { id: responseData.name, ...ingredient } });
      });
  }, []);

  const removeIngredient = useCallback(ingredientId => {
    // setIsLoading(true);
    dispatchHttp({ type: "SEND" });
    fetch(`https://react-hooks-update-f5a88.firebaseio.com/ingredients/${ingredientId}.json`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        // setIsLoading(false);
        dispatchHttp({ type: "RESPONSE" });
        // setIngredients(prevIngredients =>
        //   prevIngredients.filter(ing => ing.id !== ingredientId)
        // );
        dispatch({ type: 'DELETE', id: ingredientId });
      })
      .catch(error => {
        // setError(error.message)
        dispatchHttp({ type: "ERROR", errorData: error.message });
      });
  }, []);

  const clearError = () => {
    // setError(null);
    // setIsLoading(false);
    dispatchHttp({ type: "CLEAR" });
  };

  const ingredientList = useMemo(() => {
    return (
      <IngredientList ingredients={ingredients} onRemoveItem={removeIngredient} />
    )
  }, [ingredients, removeIngredient])

  return (
    <div className="App">

      {httpState.error && <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>}

      <IngredientForm addIngredient={addIngredient} loading={httpState.loading} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        {ingredientList}
      </section>
    </div>
  );
}

export default Ingredients;
