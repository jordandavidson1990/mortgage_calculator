import React from 'react';
// import CalculateResult from './CalculateResult'

const DisplayResult = (props) =>{
  
  return(
    console.log(props),
    <p>You can borrow £{props.state.allowed}</p>
  )
}
export default DisplayResult;
