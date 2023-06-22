const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
},{ 
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];

renderTodoList();

function renderTodoList(){
  let todoListHTML='';

  for(i=0;i<todoList.length;i++){
    const todoObject=todoList[i];
    const name=todoObject.name;// const {name, dueDate}=todoObject;
    const dueDate=todoObject.dueDate;
    const html=`
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
      todoList.splice(${i},1);
      renderTodoList();
     " class="delete-todo-button js-delete-todo-button">Delete</button>
      `;
    todoListHTML+=html;
  }

  document.querySelector('.js-todo-list')
    .innerHTML=todoListHTML;

  /*document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index)=>{
      deleteButton.addEventListener('click',()=>{
        todoList.splice(${i},1);
        renderTodoList();
      })
    });// use instead of onclick*/
}


document.querySelector('.js-add-todo-button')
  .addEventListener('click', ()=>{
    addTodo();
  });

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement=document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  
  todoList.push({
    name,
    dueDate});

  inputElement.value ='';//to reset the placeholder empty
  dateInputElement.value='';
  renderTodoList();
}