console.log("Running TODO APP!");

const addBtn = document.getElementById('todo-add');

addBtn.onclick = () => {
    console.log("You clicked ADD");
    const jobCont = document.createElement('div');
    jobCont.id = 'job-' + jobiD


    const jobDesc = document.createElement('p')
    jobDesc.innerText = jobInput.value;


    document.getElementById('todo-list').appendChild(el);
}

document.getElementById('delete-all').onclick = () => {
    console.log("Deleting everything");
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
}

// how to create slider see Youtube LECTURE

// class MyClass {
//     myval = 42;
//     constructor(props) {
//         console.log("Initializing with" + props);
//         this.name - props.name;
//         this.lastName = props.lastName;
//     }

//     showMyVal() {
//         console.log("My Val is", this.myval);
//     }

//     setMyVal(num) {
//         this.myval = num;
//     }
// }

// const newInstance = new MyClass(name: "Sandra", lastName: "Silver");

// newInstance.showMyVal();
// newInstance.setMyVal(66);
// newInstance.showMyVal();

