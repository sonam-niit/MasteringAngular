let array: number[]=[1,2,8,3,4,5,8,6,7,8,9]
class Count{

    count=()=>console.log(array.filter(x=>x==8).length);
}
class Sum extends Count{
    sum=()=>{
        let total=0;
        for(let i of array)
        total+=i

        console.log(total);
    }
}
let obj= new Sum();//instance of Child class
obj.count(); //child can access parent class methods as well as proprties.
obj.sum();