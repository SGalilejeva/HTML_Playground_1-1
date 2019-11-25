

console.log("RunningMyJS");
a = 55;
console.log(a);


var myName = "Sandra";
var myStr = "My name is " + myName + " and I am well!";
console.log("Name");

var someAdjective = "fascinating"
var myStr = "Learning to code is ";
myStr += someAdjective;
console.log("myStr");

function addHandlers() {

    function onClick() {
        console.log("You clicked me")
    };

    // const but2 = document.getElementById('button2');
    const but2 = document.querySelector('#button2');
    but2.onclick = onClick;
    but2.onmousedown = function () {
        console.log("Mouse down!");
    }
    but2.onmouseup = () => {
        console.log("Minnie Mouse!");
    }
    const but3 = document.querySelector('#button3');
    but3.ondblclick = () => {
        console.log("Double Click");
    }
}
// document.body.onscroll = () => {
// console.log("Scrolling");

// }

window.onwheel = (event) => {
    console.log("Mouse wheel turning DeltaY: " + event.DeltaY);
}


addHandlers(); 