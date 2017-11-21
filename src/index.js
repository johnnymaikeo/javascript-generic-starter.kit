import './index.css';

import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
// debugger; // create a debug point and display the source.map
console.log(`I would pay ${courseValue} for this awesome course!`);
