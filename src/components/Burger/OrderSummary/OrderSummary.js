import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'
const orderSummary = (props) => {
    const ingredientlist  = Object.keys(props.ingredients)
                        .map((ind) => {
                            return(
                                <li key = {ind}>
                                    {ind} : {props.ingredients[ind]} 
                                </li>
                            )
                        });
    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientlist}
            </ul>
            <p>Continue to checkout ?</p>
            <Button btnType = "Danger" click = {props.cancel}>Cancel</Button>
            <Button btnType = "Success" click = {props.continue}>Continue</Button>
        </Auxiliary>
    )
}

export default orderSummary;