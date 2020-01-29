import React from 'react';

const Stats = ({ numbers }) => {
  const unique = numbers.reduce((obj, num) => {
    if (obj[num]) {
      return obj;
    } else {
      obj[num] = num;
      return obj;
    }
  }, {});
  //console.log('test');
  return (
    <div className="unique-div">
      <div>There is {Object.keys(unique).length} unique numbers</div>
    </div>
  );
};

export default Stats;
