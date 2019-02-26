const rootNode = document.getElementById('root');

const todoItems = [];
let i = 0;
let mainPage_wrapper = document.createElement('div');
let add_task_wrapper = document.createElement('div');
let modify_task_wrapper = document.createElement('div');

function saveTask(descrip){
    if (descrip){
        todoItems.push({isDone: false, id: i++, description: descrip});
        localStorage.setItem(i++, descrip);
    }
}

function cancel_add_task(){
    history.back(1);
}

function createMainPage(){
    mainPage_wrapper.innerHTML = '';
    let add_button = document.createElement('button');
    let task = document.createElement('div');
    let title = document.createElement('h2');
    let checkbox = document.createElement('div');
    let delete_div = document.createElement('div');
    let description_div = document.createElement('div');

    title.innerText = 'Simple TODO apllication'
    task.className = 'task-item';
    add_button.innerText = 'Add new task';
    mainPage_wrapper.className = 'main_page_wrapper';
    checkbox.className = 'checkbox';
    delete_div.className = 'delete';
    mainPage_wrapper.appendChild(title);
    mainPage_wrapper.appendChild(add_button);
    delete_div.addEventListener('click', () => {
        task.remove();
    })
    checkbox.addEventListener('click', () => {
        checkbox.style.backgroundColor = 'grey';
    })
    add_button.onclick = function(){
        add_task_wrapper.innerHTML = '';
        addTask()
    };
    description_div.addEventListener('click', () => {
        modify_item()
    })

    for (let i = 0; i < todoItems.length; i++) {
        mainPage_wrapper.appendChild(task);
        if (todoItems.isDone){
            checkbox.className += 'done';
        }
        task.appendChild(checkbox);
        description_div.innerText = localStorage.getItem(i+1);
        task.appendChild(description_div);
        task.appendChild(delete_div);      
    }

}

function addTask(){
    location.hash = '/add';

    let inputField = document.createElement('input');
    let title = document.createElement('h2');
    let cancel_btn = document.createElement('button');
    let save_btn = document.createElement('button');

    title.innerText = 'Add Task';
    add_task_wrapper.className = 'add_task_wrapper';
    cancel_btn.innerText = 'Cancel';
    save_btn.innerText = 'Save changes';
    save_btn.addEventListener('click', () => {
        saveTask(inputField.value);
        history.back(1);
        createMainPage();
        rootNode.appendChild(mainPage_wrapper);
    });
    cancel_btn.addEventListener('click', cancel_add_task);
    add_task_wrapper.appendChild(title);
    add_task_wrapper.appendChild(inputField);
    add_task_wrapper.appendChild(cancel_btn);
    add_task_wrapper.appendChild(save_btn);

}

function modify_item(i){
    location.hash = `/modify/${localStorage.getItem(i).id}`;

    let inputField = document.createElement('input');
    let title = document.createElement('h2');
    let cancel_btn = document.createElement('button');
    let save_btn = document.createElement('button');

    inputField.value = localStorage.getItem(i);
    title.innerText = 'Modify item';
    modify_task_wrapper.className = 'modify_task_wrapper';
    cancel_btn.innerText = 'Cancel';
    modify_task_wrapper.appendChild(title);
    modify_task_wrapper.appendChild(inputField);
    modify_task_wrapper.appendChild(cancel_btn);
    modify_task_wrapper.appendChild(save_btn);

    cancel_btn.addEventListener('click', createMainPage);
    save_btn.innerText = 'Save changes';
    save_btn.addEventListener('click', () => {
        localStorage.setItem(i, inputField.value);
        createMainPage();
    });
}

window.addEventListener('hashchange', function() {
    rootNode.innerHTML = '';
    let start = 0;
    let finish = 8;
    if (location.hash === '#/add') {
        rootNode.appendChild(add_task_wrapper);
    }
    if (location.hash.substr(start, finish) === '/modify/'){
        rootNode.appendChild(modify_task_wrapper)
    }
    if (location.hash === ''){
        rootNode.appendChild(mainPage_wrapper);
    }
})

createMainPage();
rootNode.appendChild(mainPage_wrapper);
