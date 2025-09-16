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