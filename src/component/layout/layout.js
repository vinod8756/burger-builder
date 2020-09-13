import React from 'react'
import './layout.css'
import Aux from '../../hoc/auxilary'


const Layout = (props) => (   
     <Aux>  
    <div className = "Content">toolbar  sidedraw toolbar</div>
    <main>
        {props.children}
    </main>
    </Aux>
)


export default Layout