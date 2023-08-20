class Parent{
    constructor(){
        this.fatherName = "Khorshed"
    }
}

class child extends Parent{
    constructor(name){
        super();
        this.name = name
    }
}
const baby = new child("rakib");
const baby2 = new child("popy");
const baby3 = new child('beuty');
console.log(baby, baby2, baby3)