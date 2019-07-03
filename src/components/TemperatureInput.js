import React from 'react';


const TemperatureInput = (props) =>{
    return(
        <div >
            <label>Please enter Temperature in {props.unit}:</label>
            <input type="Text" value= {props.temp} onChange={props.updateTemperature}/>
        </div>
    )
}

export default TemperatureInput;