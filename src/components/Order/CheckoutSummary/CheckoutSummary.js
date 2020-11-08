import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.css'
const checkoutSummary = (props) => {
    
    return (
        <div className = {classes.CheckoutSummary}style = {{width:'100%',margin:'auto'}}>
            <h1>
                We hope it tests well
            </h1>
            <Burger type = {props.ingredients}/>
            <Button btnType="Danger" clicked>Cancel</Button>
            <Button btnType="Success" clicked>Continue</Button>
        </div>
    )
}
export default checkoutSummary;