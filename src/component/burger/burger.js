import React from 'react'
import './burger.css'
import Burgeringredient from './burgeringredient'

const burger = (props) => {
   let transformedingredient = Object.keys(props.ingrdients)
   .map(igkey => {return [...Array(props.ingrdients[igkey])].map((_ , i)=> 
    <Burgeringredient key ={igkey+i} type = {igkey}/>)
})
.reduce((Arr, el) => {
    return Arr.concat(el)
}, [])
 
  if (transformedingredient.length === 0) {
       transformedingredient = <p>please start adding!!</p>
      
  }
    return (
        <div className = "burger">
          <Burgeringredient type = "breadtop" />
         {transformedingredient}
          <Burgeringredient type = "breadbottom" />
        </div>

    );
}


export  default burger;