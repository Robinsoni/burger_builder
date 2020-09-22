import React from 'react'
import Classes from './Modal.module.css';

const modal = (props) => (
    <div style ={{
        transform: props.ordered ? 'translateY(0)' : 'translateY(-100VH)'
    }} className ={ Classes.Modal}>
        {props.children}
    </div>
)

export default modal;