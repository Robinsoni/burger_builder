import React from 'react'
import classes from './MenuToggler.module.css'
const menuToggler = (props) => {
    return(
        <div className={classes.DrawerToggle} onClick = {props.toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
export default menuToggler;