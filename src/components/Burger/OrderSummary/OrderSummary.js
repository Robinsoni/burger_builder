import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary'
const orderSummary = (props) => {
    const ingredientlist  = Object.keys(props.ingredients)
                        .map((ind) => {
                            return(
                                <li>
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
        </Auxiliary>
    )
}

export default orderSummary;