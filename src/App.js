import { render } from '@testing-library/react';
import React, { useState } from 'react';
import './App.css';
import Result from './Components/Result/Result'

function App() {

  let calcButtons = ["(","CE",")","C","1","2","3","+","4","5","6","-","7","8","9","x",".","0","=","÷"]; //Calc button array
  let [operation,setOperation] = useState(""); //operation state
  let [currentResult,setCurrentResult] = useState("0"); //result state

  const buttonClick = (buttonClicked) => {
    
    //try-catch block for operations
    try {
      if (buttonClicked === "=") { //when to evaluate logic
        setCurrentResult(eval(operation))
        setOperation(currentResult)
      }else if(buttonClicked === "C"){ //Clear calcualtor
        setOperation("")
        setCurrentResult("0")
      }else {
        if(buttonClicked === "x"){ //convert X into * for evaluation
          buttonClicked="*";
        }else if(buttonClicked === "÷"){ //convert ÷ into / for evaluation
          buttonClicked="/";
        }
        setOperation(operation+buttonClicked) //concate the string
      } 
    } catch (error) {
      setCurrentResult("Error!") //Error while execution
    }
}
  

  return (
    <div className="container">
      <div className="calculator-body">
        <Result result={currentResult === "0" ? operation : currentResult} />

        {
          calcButtons.map((button,i) => {
            return(
                <React.Fragment key={button}>
                  <button key={button} className="button" onClick={() => buttonClick(button)}>{button}</button>
                </React.Fragment>)
            })
        }
      </div>
    </div>
  );
}

export default App;