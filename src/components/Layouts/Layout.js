import React from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
  //console.log(Classes)
const layout = ( props ) => (
  
    <Auxiliary>
        <div>
            <Toolbar />
             SideDrawer, Backdrop
        </div>
        <main className = {Classes.Content}>
            {props.children}
        </main>
    </Auxiliary>
)
export default layout;