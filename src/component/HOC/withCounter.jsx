import React from "react";

const withCounter = (OriginalComponent) => {
  class newComponent extends React.Component {
    state = {
        count: 0
    }

    Increment = () =>{
        this.setState((prevState) => ({count : prevState.count + 1}))
        
    }

    render(){
        let {count} = this.state
        return (
            <OriginalComponent count={count} Increment={this.Increment}></OriginalComponent>
        )
    }
  }
  return newComponent;
};

export default withCounter;
