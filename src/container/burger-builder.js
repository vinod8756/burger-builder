import React, { Component } from 'react'
import Aux from '../hoc/auxilary'
import Burger from '../component/burger/burger'
import Buildcontrols from '../component/burger/buildcontrols/buildcontrols'

const INGRDIENT_PRICES = {
    salad : 0.4,
    meat :0.9,
    cheese: 0.7
}

class Burgerbuilder extends Component {
    state = {
        ingredients : {
            cheese : 0,
            meat : 0,
            salad : 0
        },
      totalprice : 4
       
      
    }

    addingredientHandler = (type) => {
       let newcount = this.state.ingredients[type] ; 
       let updatedingredients = {
           ...this.state.ingredients
       };
       updatedingredients[type] = newcount;

       const priceaddition = INGRDIENT_PRICES[type];
       
       const newprice = this.state.totalprice + priceaddition;
      
       console.log()

    this.setState({
        ingrdients :  updatedingredients , totalprice : newprice

    })

    }



    render () {
        return (
            <Aux>
                <Burger
                ingrdients = {this.state.ingredients}></Burger>
                <Buildcontrols
                adder = {this.addingredientHandler}></Buildcontrols>
                
                
            </Aux>
            
        );
    }
}

export default Burgerbuilder