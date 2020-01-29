import React, { useState } from 'react';
import './App.css';
import Stats from './components/Stats';
import Numbers from './components/Numbers';

const randomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
};
//store list of numbers in state
//provide a way to add to list of number
//passing it thru to stats and numbers and update in title

function App() {
  const [nums, setNums] = useState([]);
  //console.log(nums);
  const addNumbers = () => {
    let numbers = [...nums, randomNumber()];

    setNums(numbers);
  };

  return (
    <div className="App">
      <h1>The Numbers Games ({nums.length})</h1>
      <button onClick={addNumbers}>Add Number</button>
      <Stats numbers={nums} />
      <Numbers numbers={nums} />
    </div>
  );
}

export default App;
