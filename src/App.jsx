
import Display from './components/Display';
import ButtonsContainer from "./components/ButtonsContainer"
import styles from './App.module.css';
import { useState } from 'react';


function App() {
  const [calVal, setcalVal] = useState("");
  const onButtonClick = (buttonText) => { 
   if (buttonText === 'C'){
    setcalVal("");
   }
   else if(buttonText === '='){
    const result = eval(calVal);
    setcalVal(result);
   }
   else{
    const newDisplayValue = calVal + buttonText;
    setcalVal(newDisplayValue);
   }
  };

  return (
    <div classNameName={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick = {onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
