import React from "react"

class ClassCounter extends React.Component {
    state = {
        name : "",
        count : 0,
    }

    componentDidMount(){
        Document.title = `clicked : ${this.state.count} times`
    }
    componentDidUpdate(prevProps, prevState) {
        // based on count state change 
        if(prevState.count !== this.state.count){
            console.log(`document title updating`)
            Document.title = `clicked : ${this.state.count} times`
        }
    }

    render() { 
        return(
            <div>
                 <input type="text" onChange={(e) => this.setState({name : e.target.value})} />
                 <button onClick={() => this.setState({ count : this.state.count + 1})}>
                     count : {this.state.count} </button>
            </div>
        )
    }
}
 
export default ClassCounter;