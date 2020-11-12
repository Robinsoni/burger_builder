import React from 'react'
import classes from './NavigationItems.module.css'
import NavItem from './NavigationItem/NavigationItem'
const navigationItems = ()  => (
    <ul className = {classes.NavigationItems}>
        <NavItem link = "/" exact active>Burger Builder </NavItem>
        <NavItem link = "/orders">Orders</NavItem> 
    </ul>
)

export default navigationItems