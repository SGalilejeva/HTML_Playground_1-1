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

// how to create slider



