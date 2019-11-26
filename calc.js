console.log("Starting my Calc!");



const myaddbutton = document.getElementById('addbut').onclick = () => {
    console.log("ADDING");
}
// get element numbers from two inputs 

// show result in div 

const myinp1 = document.getElementById('val1');
const myinp2 = document.getElementById('val2');
const resultElement = document.getElementById('result');

console.log('Inp1 value:' + myinp1.value);
console.log('Inp2 value:' + myinp2.value);

const val1 = parseFloat(myinp1.value);
const val2 = parseFloat(myinp2.value);

console.log('Real result is this:' + (val1 + val2));
