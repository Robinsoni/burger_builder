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
        {controls.map(ctrl => (
            <BuildControl label = {ctrl.label} key = {ctrl.label} />
        ))}
    </div>
);
export default buildControls;