import { useState } from 'react'
import IngredientsList from './IngredientsList/IngredientsList'
import RecipesList from './RecipesList/RecipesList'
import InputFoodHandler from './InputFoodHandler/InputFoodHandler'
import './MealHandler.css'
import * as React from 'react';
import Button from '@mui/material/Button';



function MealHandler({mealName, mealRecipes, mealIngredients}) {
const [activeAdd, setActiveAdd]= useState(false)


  return (
    <>

      <h4 className='mealTitle'>{mealName}</h4>

      <RecipesList mealRecipes={mealRecipes}/>
      <IngredientsList mealIngredients={mealIngredients}/>
      <div className='handlers'>
        <Button onClick={()=> setActiveAdd(!activeAdd)}>Añadir ingrediente</Button>
      </div>
      {/* {activeAdd? <InputFoodHandler />: null} */}
    </>
  )
}

export default MealHandler;