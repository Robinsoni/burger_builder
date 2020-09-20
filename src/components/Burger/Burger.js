import React from 'react'
import Classes from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
const burger = (props) => {
    return(
        <div className ={Classes.Burger}>
            <BurgerIngredients type="BreadTop" />
            <BurgerIngredients type="Seeds" />
            <BurgerIngredients type="Cheese" />
            <BurgerIngredients type="Meat" />
            <BurgerIngredients type="BreadBottom" />
        </div>
    )
}

export default burger;