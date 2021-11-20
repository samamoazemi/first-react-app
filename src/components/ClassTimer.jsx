import React from "react";

class ClassTimer extends React.Component {
    state={
        count : 0,
    }

componentDidMount(){
    this.myTime = setInterval(() => {
        console.log("Hi Sama")
        this.setState({count : this.state.count + 1})
    }, 1000 )
  }
  
  componentWillUnmount(){
      console.log("cwum")
      clearInterval(this.myTime)
  }

    render() { 
        return <div>class interval</div>;
    }
}
 
export default ClassTimer ;