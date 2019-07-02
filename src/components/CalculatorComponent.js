import React, {Component} from "react";
import TemperatureInput  from './TemperatureInput';
import TemperatureInputF from './TemperatureInput'

class Calculator extends Component {
    constructor(prop){
        super(prop)
        this.state ={
            tempInCel: 0,
            tempInFar: 32
        }
    }

    //(0°C × 9/5)  = (F -32)*5/9


    FToCConverter = (value)=>{
    const f = (value * 9/5) + 32;
    this.setState({
        tempInFar: f
    })
    }

    CToFConverter = (value)=>{
        const c = (value -32)*5/9;
        this.setState({
            tempInCel: c
        })
    }

    render(){
        return(<h1>Hello I am Calculator
            <TemperatureInput  temp = {this.state.tempInCel} unit="°C"  updateF={(event)=>this.CToFConverter(event.target.value)} />
            <TemperatureInputF  temp = {this.state.tempInFar}  unit="°F" updateC={(event)=>this.FToCConverter(event.target.value)}/>
        </h1>)
    }
}

export default Calculator;