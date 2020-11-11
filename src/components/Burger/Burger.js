import React from 'react'
import Classes from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
const burger = (props) => {
    console.log('lol',props);//return
    let ingredientType = Object.keys(props.type).map((ind) => {
        console.log('lol',ind);
    
       return [...Array(props.type[ind])].map((_,i) => <BurgerIngredients key={i+ind} type={ind} />) 
    }).reduce((arr,curr) => (arr.concat(curr)));
    let he;
    if(!ingredientType.length){
        ingredientType = <div>Please add some ingredients</div>
    }
    console.log(he )
    return(
        <div className ={Classes.Burger}>
            <BurgerIngredients  type="BreadTop" />
            {ingredientType}
            <BurgerIngredients  type="BreadBottom" />

        </div>
    )
}

export default burger;