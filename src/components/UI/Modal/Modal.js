import React from 'react'
import Classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop'
import Auxiliary from '../../../hoc/Auxiliary'
const modal = (props) => (
    <Auxiliary>
        <Backdrop show = {props.ordered} click = {props.hideModal} />
        <div style ={{
            transform: props.ordered ? 'translateY(0)' : 'translateY(-100VH)'
        }} className ={ Classes.Modal}>
            {props.children}
        </div>
    </Auxiliary>
)

export default modal;