import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component{
    state = {
        ingredients : {
                        Cheese  :2,
                        Meat    :1,
                        Salad   :3,
                        Bacon   :1,
                    }
    }
    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search)
        let ingredients = {};
        for(let params of query.entries()){
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
            <Route path = {this.props.match.path + '/contact-data'} component = {ContactData}/>
       </div>)
        
    }
}
export default Checkout