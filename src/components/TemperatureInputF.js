import React from 'react';
const TemperatureInputFahrenheit = (props) =>{
    return(
        <div >
            <label>Please enter Temperature in Fahrenheit: </label>
            <input type="Text" value= {props.temp} onChange={props.UpdateTemperature}/>
        </div>
    )
}

export default TemperatureInputFahrenheit;