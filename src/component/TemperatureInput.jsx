import React from "react";

const scaleNames = {
  c: "celsius",
  f: "fahrenheit",
};

function TemperatureInput({ scale, temperature, changeTemperature }) {
  return (
    <>
      <fieldset>
        <legend>Input Temperature in {scaleNames[scale]} : </legend>
        <input
          type="text"
          value={temperature}
          onChange={(e) => changeTemperature(e, scale)}
        />
      </fieldset>
    </>
  );
}
export default TemperatureInput;
