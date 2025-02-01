import { useState } from 'react';
import './App.css';

function App() {
  const [valnumber, setValNumber] = useState('');
  const [disp, setDisp] = useState('');

  const enternumber = (e) => {
    let inputVal = e.target.value;

    if (inputVal === '') {
      setDisp("Enter a number");
      setValNumber('');
      return;
    }

    let num = Number(inputVal);
    setValNumber(num);

    if (num < 0) {
      setDisp("Enter a positive value");
      return;
    }

    let values = "";
 
    if (num % 2 == 0) {
      let count = 0;
      let nextNumber = num + 1;
  
      while (count < 3) {
        if (nextNumber % 2 == 0) {
          values += nextNumber + ", ";
          count++;
        }
        nextNumber++;
      }
      setDisp(values);
       values = "";
    }
    if (num % 2 != 0) {
      let count = 0;
      let nextNumber = num + 1;
  
      while (count < 3) {
        if (nextNumber % 2 !== 0) {
          values += nextNumber + ", ";
          count++;
        }
        nextNumber++;
      }
      setDisp(values);
       values = "";
    }

    
  };

  return (
    <>
      <input type='number' value={valnumber} placeholder="Enter number here" onChange={enternumber} />
      <div id='display'>{disp}</div>
    </>
  );
}

export default App;
