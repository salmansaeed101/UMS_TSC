class Person{
name!:string;
age!:number;
constructor(name:string,age:number){
    this.name=name;
    this.age=age;
}
getName(){
    return this.getName
}
}
class Student extends Person{
    rollNumber!:string;
    courses:Course[] =[];
    constructor(name:string,age:number,roolNumber:string){
        super(name,age)
        this.rollNumber=roolNumber;
    }
    registerForCourse(course:Course){
        this.courses.push(course);
    }
}
class Instructor extends Person{
salary!:number;
courses:string[]=[];
constructor(name:string,age:number,salary:number){
    super(name,age)
    this.salary=salary;
}
assignCourse(course:string){
    this.courses.push(course)
}
}

class Course{
    id!:string;
    name!:string;
    students:Student[]=[];
    instructor:Instructor[]=[]
    constructor(id:string,name:string){
        this.id=id;
        this.name=name;
    }
    addStudents(student:Student){
        this.students.push(student)
        student.registerForCourse(this)
    }
    setInstructor(instructor:Instructor){
    
        this.instructor.push(instructor);

    }
}

const student1= new Student("salman",22,"student1"); 
const student2= new Student("musa",22,"student2"); 
const Instructor1= new Instructor("Zia",22,100000); 
Instructor1.assignCourse("Metaverse");
Instructor1.assignCourse("Block Chain");
Instructor1.assignCourse("Computer Network");
console.log(Instructor1.courses);
const Instructor2= new Instructor("Imran",32,700000); 
const Course1=new Course("course1","Metaverse");
const Course2=new Course("course2","BlockChain");
Course1.addStudents(student1);
Course1.setInstructor(Instructor1);
Course2.addStudents(student2);
console.log(Course1.instructor);
console.log(student1.courses)
console.log(Instructor2.courses)


