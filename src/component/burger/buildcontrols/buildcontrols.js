import React from 'react'
import './buildcontrols.css'
import Buildcontrol from './buildcontrol/buildcontrol'


const control = [
    {label : 'salad', type : 'salad'},
    {label : 'cheese', type : 'cheese'},
    {label : 'meat', type : 'meat'}
]



const Buildcontrols = (props) => (
    <div className = "buildcontrols">
        {control.map(ctrl => (
            <Buildcontrol 
            key = {ctrl.label} 
            label = {ctrl.label}
            Add = {() => props.adder(ctrl.type)  } />
        ))}

        
    </div>
)


export default Buildcontrols