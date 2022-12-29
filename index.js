class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.getName;
    }
}
class Student extends Person {
    rollNumber;
    courses = [];
    constructor(name, age, roolNumber) {
        super(name, age);
        this.rollNumber = roolNumber;
    }
    registerForCourse(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
class Course {
    id;
    name;
    students = [];
    instructor = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudents(student) {
        this.students.push(student);
        student.registerForCourse(this);
    }
    setInstructor(instructor) {
        this.instructor.push(instructor);
    }
}
const student1 = new Student("salman", 22, "student1");
const student2 = new Student("musa", 22, "student2");
const Instructor1 = new Instructor("Zia", 22, 100000);
Instructor1.assignCourse("Metaverse");
Instructor1.assignCourse("Block Chain");
Instructor1.assignCourse("Computer Network");
console.log(Instructor1.courses);
const Instructor2 = new Instructor("Imran", 32, 700000);
const Course1 = new Course("course1", "Metaverse");
const Course2 = new Course("course2", "BlockChain");
Course1.addStudents(student1);
Course1.setInstructor(Instructor1);
Course2.addStudents(student2);
console.log(Course1.instructor);
console.log(student1.courses);
console.log(Instructor2.courses);
export {};
