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
// const container = document.querySelectorAll('.container');
// console.log("container tag" + container.tagName);
// const children = container.childNodes;
// for (let child of children) {
    // console.log("My element has tag" + child.tagName);
// }

