const todoList=[{
  name: 'make Dinner',
  dueDate: '22-12-25',
},{
  name:'wash Dishes',
  dueDate:'22-12-25'
}]
renderTodoList();

function renderTodoList(){

  let todoListHTML='';

  todoList.forEach((todoObject,index)=>{
    const name=todoObject.name;
    const dueDate=todoObject.dueDate
    const HTML=`
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-todo-button">Delete</button>`;
    todoListHTML+=HTML;
  });

  document.querySelector('.js-todo-list').
    innerHTML=todoListHTML  ;
  

  document.querySelectorAll('.delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
  }



  document.querySelector('.js-add-todo')
    .addEventListener('click',()=>{
      addTodo();
    });

function addTodo(){
  const inputElement=document.querySelector('.js-name-input');
  const name=inputElement.value;

  const dateinputElement = document.querySelector('.js-due-date');
  const dueDate=dateinputElement.value;

  todoList.push({name,dueDate});

  inputElement.value='';

  renderTodoList();
}