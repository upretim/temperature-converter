import React, {Component} from 'react';

const Verdict = (props)=>{
  return(
      props.temperature>100? <h3>Water will boil</h3>: <h3>Water will not  boil</h3>
  )
}

export default Verdict;