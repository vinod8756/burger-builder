import React from 'react'
import buildcontrolclasses from'./buildcontrol.css'

const Buildcontrol = (props) => ( 
        <div className = {buildcontrolclasses.BuildControl}>
        <div className = {buildcontrolclasses.Label}>{props.label} </div>
        <button className = {buildcontrolclasses.More} onClick = { props.Add } >More</button>
        <button className= {buildcontrolclasses.Less}>Less</button>
        </div>
        )
   
    
   
   


export default Buildcontrol