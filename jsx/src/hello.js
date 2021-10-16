import React from 'react';

class Hello extends React.Component{
    render(){
        return(
            <div>
                
                <label className  = "label" htmlFor= "name">Enter Name:</label>
                <input id = "name" type = "text"></input>
                <button style = {{backgroundColor:'white'}}>Click me!</button>
            </div>
        );
    }
}
export default Hello;