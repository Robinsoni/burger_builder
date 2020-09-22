import React from 'react'
import Classes from './BuildControls.module.css'
import BuildControl from '../BuildControls/BuildControl/BuildControl'
const controls = [
    {label:'Salad', type:'Salad'},
    {label:'Bacon', type:'Bacon'},
    {label:'Cheese', type:'Cheese'},
    {label:'Meat',type:'Meat'},
];
const buildControls = (props) => 
    (<div className = {Classes.BuildControls}>
        <p>Total Price: {props.price.toFixed(2)}</p>
        {controls.map(ctrl => (
            <BuildControl 
                removed = {() => props.removeIngred(ctrl.type) } 
                added = {() => props.addIngred(ctrl.type)} 
                label = {ctrl.label} key = {ctrl.label} />
            
        ))}
        <button onClick={props.ordered} disabled={!props.purchasable} className={Classes.OrderButton}>ORDER NOW</button>
    </div>
);
export default buildControls;