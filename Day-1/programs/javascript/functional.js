function Employee(name, designation,yearOfBirth){
    this.name=name;
    this.designation=designation;
    this.yearOfBirth=yearOfBirth;
}
Employee.prototype.calculateAge=function(){
    console.log("Age: "+ (2023-this.yearOfBirth));
}

let e1= new Employee("Alex","Senior Manager",1989);
let e2= new Employee("Bob","Developer",1993);

e1.calculateAge()
e2.calculateAge();