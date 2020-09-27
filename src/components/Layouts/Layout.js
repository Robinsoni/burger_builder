import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import Backdrop from  '../UI/Backdrop/Backdrop'
  //console.log(Classes)
class Layout extends Component  {
    state = {
        showSideDrawer: true
    }
    closeSideDrawerHandler = () => {
        this.setState({showSideDrawer:false})
    }

    render(){
        return(
        <Auxiliary>
            <div>
                <Toolbar />
                <SideDrawer show = { this.state.showSideDrawer} click = {this.closeSideDrawerHandler} />
                
            </div>
            <main className = {Classes.Content}>
                {this.props.children}
            </main>
        </Auxiliary>
        )
    }
}
export default Layout;