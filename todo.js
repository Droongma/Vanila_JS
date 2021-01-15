const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = "toDos";

let toDos = []; // toDo array

function deleteToDo(event){
     const btn = event.target;
     const li = btn.parentNode;
     toDoList.removeChild(li);
     const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    }); // array에서 함수 적용 결과가 true인 element만 가지고 새로운 array 만듬
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() { // 자바스크립트는 local storage에 데이터를 저장할 때 string으로 저장하려함
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // 그래서 자바스크립트 object를 string으로 바꿈
}

function paintToDo(text) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDos.length + 1;

    delBtn.innerText = '❌';
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    span.style.color = "#6c5ce7";
    span.style.fontWeight = "bold";
    
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos(); 
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos); // save할때와는 반대로, JS string을 object로 바꾸기
        parsedToDos.forEach(function(toDo) { // parsedToDos 각각의 원소마다 함수 실행
            paintToDo(toDo.text);
        } ) 
    } 
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();
