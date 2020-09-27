import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../../Logo/Logo'
import Auxiliary from '../../../hoc/Auxiliary'
import classes from  './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
const sideDrawer  = (props) => {
    let attachClasses = [classes.SideDrawer,classes.Open]
    if(!props.show){
        attachClasses = [classes.SideDrawer,classes.Close]
    }
    console.log(attachClasses)
    return(
        <Auxiliary>
            <Backdrop show = {props.show} click = {props.click} />
            <div className = {attachClasses.join(' ')}>
                <div className = {classes.Logo}>
                    <Logo />
                </div>
                
                <nav >
                    <NavigationItems />
                </nav>
                
            </div>
        </Auxiliary>
    );
}

export default sideDrawer;