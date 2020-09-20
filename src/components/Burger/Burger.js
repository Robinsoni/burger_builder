import React from 'react'
import Classes from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
const burger = (props) => {
    const ingredientType = Object.keys(props.type).map((ind) => {
       return [...Array(props.type[ind])].map(() => <BurgerIngredients type={ind} />) 
    })
    console.log(ingredientType)
    return(
        <div className ={Classes.Burger}>
            {ingredientType}
        </div>
    )
}

export default burger;