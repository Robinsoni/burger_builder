import React, { Component } from 'react'
import Classes from './BurgerIngredients.module.css'
import PropTypes from 'prop-types';
class BurgerIngredients extends Component  {
    render()
    {
        let ingredients = null;
        let classtype = null;
        if(this.props.type){
            classtype = this.props.type
            ingredients = <div> className = {Classes.classtype}</div>
        }
    }
    return (
        ingredients;
    )
}
BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired,

}

export default burgerIngredients;