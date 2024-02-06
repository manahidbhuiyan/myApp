import React from "react";
import TemperatureInput from "./TemperatureInput";
import { convert, toCelsius, toFahrenheit } from "../lib/converter";
import BoilingVerdict from "./BoilingVerdict";

export default class Calculator extends React.Component {
  state = {
    temperature: "",
    scale: "c",
  };

  handleChangeTemperature = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    });
  };

  render() {
    const { temperature, scale } = this.state;

    const celcius =
      scale === "f" ? convert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? convert(temperature, toFahrenheit) : temperature;

    return (
      <>
        <TemperatureInput
          scale="c"
          temperature={celcius}
          changeTemperature={this.handleChangeTemperature}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          changeTemperature={this.handleChangeTemperature}
        />
        <BoilingVerdict
          checkTemperature={parseFloat(temperature)}
          scale={scale}
        />
      </>
    );
  }
}
