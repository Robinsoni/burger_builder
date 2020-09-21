import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary';
import Burger from  '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    Cheese  : 0.5,
    Meat    : 1.3,
    Salad   : 0.3,
    Bacon   : 0.7,
}

class BurgerBuilder extends Component{
    //var DEFULT_PRICE = 4;
    state = {
        ingredients : {
            Cheese  :0,
            Meat    :0,
            Salad   :0,
            Bacon   :0,
        },
        totalPrice  :4 
    };
    
    
    addIngredients = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const oldPrice   = this.state.totalPrice;
        const totalPrice = INGREDIENT_PRICES[type] + oldPrice;
        this.setState({
            ingredients:updatedIngredients,
            totalPrice:totalPrice
        })
    }

    removeIngredients = (type) => {
        const oldCount = this.state.ingredients[type];

        if(!oldCount){alert('You have not added any ' + type); return}
        const updatedCount = oldCount - 1
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const oldPrice   = this.state.totalPrice;
        const totalPrice =  oldPrice - INGREDIENT_PRICES[type] ;
        this.setState({
            ingredients:updatedIngredients,
            totalPrice:totalPrice
        })
    }


    render(){
        return(
            <Auxiliary>
                <Burger type = {this.state.ingredients}/>
                <BuildControls addIngred = {this.addIngredients} removeIngred = {this.removeIngredients} />
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;