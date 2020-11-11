import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary';
import Burger from  '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
//import axios from '../../axios-orders'
import axios from 'axios'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
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
        loader      :false,
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
        /* this.setState({loader:true}) */
 /*        const order = {
            ingredients:this.state.ingredients,
            price:this.state.totalPrice, // we should not send the price this way however 
                                        // It is fine for testing purpouse
            del_address:{
                name:'Robin Soni',
                addressLine1: 'Street1',
                addressLine1: 'Street2',
                city: 'City',
                postcode:'012345',
                mobileNo:'9876543210',
            },
            del_method:'Fastest'
        }
        axios.post('https://reactapp-d3bb5.firebaseio.com/orders.json',order)
            .then(response => {this.exitPurchasingHandler();this.setState({loader:false}); console.log(response)})
            .catch(err => { this.setState({loader:false}); this.exitPurchasingHandler();console.log(err)})
             */
        //const queryParam;
        var queryParam = [];
        Object.keys(this.state.ingredients).forEach(element => {
            queryParam.push( encodeURIComponent(element) + '=' + encodeURIComponent(this.state.ingredients[element]))    
        });
        /* queryParam.push('price='+this.state.totalPrice) */
        //queryParam = queryParam.replace(/^"+|"+$/g, '&');
        //console.log()
        //encodeURIComponent('')
        this.props.history.push({
            pathname:'checkout',
            search: '?' + queryParam.join('&')
        })
        //console.log('router Props',this.props)
    }


    render(){
        let orderSummary = <OrderSummary   cancel = {this.exitPurchasingHandler} 
        continue = {this.purchaseContinueHandler}
        ingredients = {this.state.ingredients}
        price  = {this.state.totalPrice.toFixed(2)}/>

        if(this.state.loader){
            orderSummary = <Spinner />
        }
        return(
            <Auxiliary>
                <Modal  ordered = {this.state.purchasing} 
                        hideModal = {this.exitPurchasingHandler}>

                {orderSummary}
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

export default withErrorHandler(BurgerBuilder,axios);