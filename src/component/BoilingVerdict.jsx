export default function BoilingVerdict({ checkTemperature = 0, scale }) {
  if (scale == "f") {
    if (checkTemperature >= 212) {
      return <p>water could boil</p>;
    } else {
      return <p>water couldn't boil</p>;
    }
  } else {
    if (checkTemperature >= 100) {
      return <p>water could boil</p>;
    } else {
      return <p>water couldn't boil</p>;
    }
  }
}
