import React, { Component } from 'react'
import Classes from './BurgerIngredients.css'
import PropTypes from 'prop-types';
class BurgerIngredients extends Component  {
    render()
    {
        let ingredients = null;
        let classtype = null;
        if(this.props.type){
            classtype = this.props.type
            ingredients = <div className = {classtype}></div>
        }
        return ingredients;
    }
}
/*BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired,

}
*/
export default BurgerIngredients;