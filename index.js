
const add_btn=document.getElementById("add-button");
const todoContainer=document.querySelector(".todo-container");
let input_txt=document.querySelector(".todo-input");


const getTodoList=()=>{
    return JSON.parse(localStorage.getItem("todo lists"));
}
let todoList= getTodoList()||[];
 
const displayDynamic=(element)=>{
    let mydiv=document.createElement("div");
    mydiv.setAttribute("class","todo-lists");
    mydiv.innerHTML=`<li class="todo-item">${element}</li> <button class="del-btn">Delete</button>`;
    todoContainer.appendChild(mydiv);
}
const addToList=()=>{
    let val=input_txt.value.trim();
    input_txt.value="";
    if(val!==""&&!todoList.includes(val)){
        todoList.push(val);
        let s=[...new Set(todoList)];
        localStorage.setItem("todo lists",JSON.stringify(s));
        displayDynamic(val);
    }
    
    
}

const enterTodoItem=(event)=>{
    if(event.key=="Enter"){
        addToList();
    }
}
const showTodoList=()=>{
    todoList.forEach(element => {
        displayDynamic(element);
    });
}
showTodoList();


const deleteListItem=(event)=>{
    if(event.target.innerHTML=="Delete"){
        let v=event.target.previousElementSibling.innerHTML;
        let idx=todoList.indexOf(v);
        todoList.splice(idx,1);
        localStorage.setItem("todo lists",JSON.stringify(todoList));
        todoContainer.removeChild(event.target.parentElement);
    }

}

add_btn.addEventListener("click",addToList);
input_txt.addEventListener("keydown",enterTodoItem);
todoContainer.addEventListener("click",deleteListItem);

