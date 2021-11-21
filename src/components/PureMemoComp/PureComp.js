import React, { PureComponent } from 'react';

class PureComp extends PureComponent {
    render() { 
        console.log("pure component")
        return <div> pure component - {this.props.name} </div>;
    }
}
 
export default PureComp;


 /* 
 The concept of pure component :
 Examines and compares props and states and does not 
 render them if they have not changed.(Optimization)
*/