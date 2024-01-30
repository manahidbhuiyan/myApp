import React from "react";
import Button from "./Button";
// import { ReactDOM } from "react"

class Clock extends React.Component {
  // values assign in state-----
  // class component er moddhe state e value rakhte hole constructor use korte hoy
  constructor(props) {
    // constructor er moddhe super call korte hoy
    super(props);
    this.state = {
      date: new Date(),
      locale: 'bn-BD',
      times: 0
    };
    this.changeTime = this.changeTime.bind(this)
  }

  // class component er state k recall korar jonno use hoy componentdidMount
  componentDidMount() {
    this.clockTime = setInterval(() => this.tick(), 1000);
  }

  //   lifecycle method off korar jonno use hoy componentWillUnmount
  componentWillUnmount() {
    clearInterval(this.clockTime);
  }

  tick() {
    // state k update korar jonno use hoy setState
    this.setState({
      date: new Date(),
    });
  }

  handleClick = () => {
    console.log("this.state.locale",this.state.locale)
    this.setState({
      locale: this.state.locale == 'bn-BD' ? 'en-US' : 'bn-BD'
    })
  }

  changeTime (){
    this.setState({
      times: this.state.times + 1
    })
  }

  render() {
    console.log("clock renderd")

    const { date, locale, times} = this.state
    return (
      <>
        <h1 className="header">React state and lifecycle hook</h1>
        <h4 className="text">
          {date.toLocaleTimeString(locale)}
        </h4>
        <Button change={this.handleClick} locale="en-US" ></Button> <br />
        <button onClick={this.changeTime} > click { times } </button>
      </>
    );
  }
}

export default Clock;
