import React from 'react';

class RegComp extends React.Component {
    render() { 
        console.log("reg component")
        return <div> reg component - {this.props.name} </div>;
    }
}
 
export default RegComp;