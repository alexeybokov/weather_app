import React from "react"

const Weather = props => (
    <div>
      { props.city &&
      <div>
        <p>Location: {props.city}, {props.country}</p>
        <p>Temperature: {props.temp} *C</p>
        <p>Pressure: {props.pressure}</p>
        <p>Sunset: {props.sunset}</p>
      </div>
      }
      <p>{ props.error }</p>
    </div>
  );

export default Weather;
