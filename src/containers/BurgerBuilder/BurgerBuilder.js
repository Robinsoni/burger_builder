import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary';
import Burger from  '../../components/Burger/Burger'
class BurgerBuilder extends Component{
    state = {
        ingredients : {
            BreadTop:1,
            Cheese:2,
            Meat:1,
            Salad:1,
            Bacon:1,
            BreadBottom:1
        }
    }
    render(){
        return(
            <Auxiliary>
                <Burger type = {this.state.ingredients}/>
                <div>Build Controls</div>
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;