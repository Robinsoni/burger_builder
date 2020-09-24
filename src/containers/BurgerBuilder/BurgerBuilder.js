import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary';
import Burger from  '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
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
        totalPrice  :4,
        purchasable :false,
        purchasing  :false,
    };

    updatePurchaseState = (ingredients) =>{
        /*const ingredients = {
            ...this.state.ingredients
        }*/ // Explore why this do not work as expected

        const sum = Object.keys(ingredients)
                .map(ind => {
                    return ingredients[ind]
                })
                .reduce((sum,ele) =>{
                    return sum+ele;
                },0);
        this.setState({
            purchasable:sum>0,
        })        
    }
    
    
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

        this.updatePurchaseState(updatedIngredients);
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

        this.updatePurchaseState(updatedIngredients);
    }
    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    }

    exitPurchasingHandler = () => {
        this.setState({
            purchasing: false
        })
    }

    purchaseContinueHandler = () => {
        alert('You continue!');
    }


    render(){
        return(
            <Auxiliary>
                <Modal  ordered = {this.state.purchasing} 
                        hideModal = {this.exitPurchasingHandler}>

                    <OrderSummary   cancel = {this.exitPurchasingHandler} 
                                    continue = {this.purchaseContinueHandler}
                                    ingredients = {this.state.ingredients}
                                    price  = {this.state.totalPrice.toFixed(2)}/>
                </Modal>
                <Burger type = {this.state.ingredients}/>
                <BuildControls 
                    ordered = {this.purchaseHandler}
                    purchasable={this.state.purchasable} 
                    price = {this.state.totalPrice} 
                    addIngred = {this.addIngredients} 
                    removeIngred = {this.removeIngredients} />
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;