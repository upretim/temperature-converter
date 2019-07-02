import React from 'react';
const TemperatureInputF = (props) =>{
    return(
        <div >
            <label>Please enter Temperature in {props.unit}:</label>
            <input type="Text" value= {props.temp} onChange={props.updateC}/>
        </div>
    )
}

export default TemperatureInputF;