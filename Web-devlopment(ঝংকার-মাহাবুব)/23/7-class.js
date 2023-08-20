class student {
    constructor(studentId, studentName){
        this.id = studentId;
        this.name =studentName;
        this.school = "sreepir high school"
    }
}
const student1 = new student(12, 'Rakib');
const student2 = new student(18, 'Ahmmed');
console.log(student1, student2);
console.log(student1.name, student2.name);


