// console.log("I'm working. Im JS. Im Beautiful");

function sayHello(name, age) {
    console.log(`Hello ${name} you are ${age} years old`); // 백틱 문자열
}

const calculator = {
    plus: function(a, b) {
        return a + b;
    }
}

const plus = calculator.plus(5, 6);
console.log(plus);
sayHello('Joohyung', 20);


const title = document.getElementById("title"); // 모든 html은 자바스크립트 객체가 된다
// const title = document.querySelector("#title"); 
title.innerHTML = "Hi! JS!"
title.style.color = "red"

console.log(title);

console.error("Fuck")

document.title = 'I own you'
// console.dir(document) // 객체의 속성 출력

function handleResize(event) {
    console.log(event)
    // console.log("I have been resized")
}

function handleClick() {
    title.style.color = "blue"
}

window.addEventListener("resize", handleResize) // 리사이즈때 함수 호출
title.addEventListener("click", handleClick)

