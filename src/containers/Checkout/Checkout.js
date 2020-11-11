import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component{
    state = {
        ingredients : {
                        Cheese  :1,
                        Meat    :2,
                        Salad   :3,
                        Bacon   :4,
                    },
        //price: 0
    }
    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search)
        let ingredients = {};
        let price =0;
        for(let params of query.entries()){
            /* if(params[0] === 'price'){
                price = params[1]
            } */
            ingredients[params[0]] = +params[1]

        }
        
        this.setState({ingredients:ingredients})
        //console.log(ingredients)
    }

    cancelOrderHandler = () => {
        this.props.history.goBack();
    }

    placeOrderHandler = () => {
        this.props.history.push(this.props.match.url + '/contact-data');
    }
    render(){
        return(<div >
            <CheckoutSummary 
                    ingredients = {this.state.ingredients}
                    cancelOrder = {this.cancelOrderHandler}
                    placeOrder = {this.placeOrderHandler}/>
            <Route  path = {this.props.match.path + '/contact-data'} 
                    render = {() => (<ContactData ingredients = {this.state.ingredients} {...this.props} />)}/>
        {/* instead of definig it as a component we want it to be rendred here
                    wich some additional properties */}
       </div>)
        
    }
}
export default Checkout