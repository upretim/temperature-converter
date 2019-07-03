import React, {Component} from "react";
import TemperatureInput  from './TemperatureInput';
import Verdict from './Verdict';
import TemperatureInputFahrenheit from './TemperatureInputF'

class Calculator extends Component {
    constructor(prop){
        super(prop)
        this.state ={
            temperatureInCelcius: '',
            temperatureInputFahrenheit: ''
        }
    }

    updateTemperature = (event)=>{
        console.log('Temprature updated', event.target.value);
        this.setState({
            temperatureInCelcius: event.target.value,
            temperatureInputFahrenheit: this.CelciusToFahrenheitConverter(event.target.value).toFixed(2) 
        })
      }

      updateTemperatureInCelcius = (event)=>{
        this.setState({
            temperatureInCelcius: this.CelciusToFahrenheitConverter(event.target.value).toFixed(2),
            temperatureInputFahrenheit: event.target.value
        })
      }

      CelciusToFahrenheitConverter = (value)=>{
        return (value * (9/5)) + 32
      }

      FahrenheitToCelciusConverter = (value)=>{
       return (value-32)/1.8
    }

    render(){
        return(
            <>
             <h1>Hello I am Calculator </h1> 
             <TemperatureInput temp={this.state.temperatureInCelcius} updateTemperature={(event)=>this.updateTemperature(event)}/>
             <TemperatureInputFahrenheit  temp={this.state.temperatureInputFahrenheit}  UpdateTemperature={(event)=>this.updateTemperatureInCelcius(event)} />
             <Verdict temperature= {this.state.temperatureInCelcius}/>
            </>
           
           )
    }
}

export default Calculator;