import React from 'react'
import Classes from './Backdrop.module.css';
const backdrop = (props) =>{
    return (
       // props.click ? <div></div>:null

        props.show ? <div className = {Classes.Backdrop} onClick={props.click}></div> : null
    );
}

export default backdrop;