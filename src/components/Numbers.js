import React from 'react';

const Numbers = ({ numbers }) => {
  const evenNums = numbers.filter(num => num % 2 === 0);
  const oddNums = numbers.filter(num => num % 2 === 1);
  //console.log(numbers);
  return (
    <div className="numbers-div">
      <div>
        <h1>All ({numbers.length})</h1>
        <ul
          style={{
            textAlign: 'center',
            margin: '10px',
          }}
        >
          {numbers.map(number => {
            return <li key={number + Math.random()}>{number}</li>;
          })}
        </ul>
      </div>
      <div>
        <h1>Even ({evenNums.length})</h1>
        <ul
          style={{
            textAlign: 'center',
            margin: '10px',
          }}
        >
          {evenNums.map(num => {
            return <li key={num + Math.random()}>{num}</li>;
          })}
        </ul>
      </div>
      <div>
        <h1>Odd ({oddNums.length})</h1>
        <ul
          style={{
            textAlign: 'center',
            margin: '10px',
          }}
        >
          {oddNums.map(num => {
            return <li key={num + Math.random()}>{num}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Numbers;
