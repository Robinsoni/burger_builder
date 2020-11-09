import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

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
        this.props.history.push(this.props.match.url + '/placeOrder');
    }
    render(){
        return(<div >
            <CheckoutSummary 
                    ingredients = {this.state.ingredients}
                    cancelOrder = {this.cancelOrderHandler}
                    placeOrder = {this.placeOrderHandler}/>
       </div>)
        
    }
}
export default Checkout