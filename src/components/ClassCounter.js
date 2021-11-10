import React from "react"
class ClassCounter extends React.Component {
    state = {
        count : 0
    }
    addOneHandler = () => {
        this.setState((prevState) => {
            return{ count : prevState.count + 1 }
        })
    }
    render() { 
        return(
            <div>
                 <h2>count - {this.state.count}</h2>
            <button onClick={this.addOneHandler}>add One</button>
            </div>
        )
    }
}
 
export default ClassCounter;