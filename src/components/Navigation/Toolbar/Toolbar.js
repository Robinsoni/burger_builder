import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import MenuToggler from '../SideDrawer/MenuToggler/MenuToggler'
const toolbar = (props) =>{
    return (
        <header className = {classes.Toolbar}>
            <MenuToggler toggleMenu={props.toggleMenu}/>
            <div className = {classes.Logo}>
                <Logo/>
            </div>
            
            <nav className = {classes.DestopOnly}>
                <NavigationItems/>
            </nav>
        </header>
    )
}

export default toolbar;