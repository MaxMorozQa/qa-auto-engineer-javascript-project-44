import * as readlineSync from 'readline-sync';


const Greeting = () => {

//var readlineSync = require('readline-sync'); 

var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

} 

export default Greeting;