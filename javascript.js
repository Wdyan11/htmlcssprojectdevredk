let price=10;
let name="Devrabic";
let isValid = false;
let students = ["Mike","youssef","Zein"];
let data = undefined;
let data2 = null;
let user ={
    id :0,
    username:"Mike",
    password:"123"

};

class Students {
    constructor(name,age,grades){
        this.name = name;
        this.age = age;
        this.grades = grades
    }

    greet() {
        console.log('Hello'+' '+this.name);
    }
    
}

let student1=new Students("yuosef",19,20);
console.log(student1);
console.log(student1.name);
student1.greet();

/*console.log(document.body);
console.log(window);*/

/*const myButton = document.querySelector("button");
const myDiv = document.querySelector("div");
const myForm = document.querySelector("form");
myButton.addEventListener("click",function(e){
    console.log("Hi"); 
})

myDiv.addEventListener("mouseover",function(e){
  alert("mouse over");
})

myForm.addEventListener()*/


