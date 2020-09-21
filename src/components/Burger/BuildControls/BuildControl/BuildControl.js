import React from 'react';
import Classes from './BuildControl.module.css';

const buildControl = (props) => (
    <div className = {Classes.BuildControl}>
        <div className = {Classes.label}>{props.label}</div>
        <button  className = {Classes.Less} onClick = {props.removed}>Less</button>
        <button onClick = {props.added}   className = {Classes.More}>More</button>    
    </div>
);

export default buildControl;