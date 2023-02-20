class Student{
    constructor(id,name,email){
        this.id=id;
        this.name=name;
        this.email=email;
    }
    display(){
        console.log("Id: "+this.id)
        console.log("Name: "+this.name)
        console.log("Email: "+this.email)
    }
}
let s1= new Student(1,'sonam','sonam@gmail.com');
let s2= new Student(2,'alex','alex@gmail.com');
s1.display();
s2.display()
let array=[s1,s2]// array of objects
for(let obj of array){
    console.log("------------------------------------")
    for(let key in obj){
        console.log(key+" : "+ obj[key])
    }
}
