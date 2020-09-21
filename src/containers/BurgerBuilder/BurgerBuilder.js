import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary';
import Burger from  '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
class BurgerBuilder extends Component{
    state = {
        ingredients : {
            Cheese:0,
            Meat:0,
            Salad:0,
            Bacon:0
        }
    }
    render(){
        return(
            <Auxiliary>
                <Burger type = {this.state.ingredients}/>
                <BuildControls />
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;