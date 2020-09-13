import React, { Component } from 'react'
import './burgeringredient.css'
import PropType from 'prop-types'3



class Burgeringredient extends Component {
    
    render () {
       
        let ingredient = null;
        
            switch (this.props.type) {
                case ("breadbottom"):
                    ingredient = <div className = "BreadBottom"></div>;
                    break;

                    case('breadtop'):
                    ingredient = (
                        <div className = "BreadTop">
                        </div>
                    )
                    break;
            
                    case('meat'):
                    ingredient = (
                        <div  className = "meat"></div>
                    )
                    break;
                  
                    case('cheese'):
                    ingredient = (
                        <div  className = "cheese"></div>
                    )  
                    break;
            
                    case('salad'):
                    ingredient = (
                        <div  className = "salad"></div>
                    )
                    break;
            
                    default :
                    ingredient = null;


                     
            
    }
    return ingredient
}
    
   
}

Burgeringredient.PropType = {
    type : PropType.string.isRequired
}


export default Burgeringredient;