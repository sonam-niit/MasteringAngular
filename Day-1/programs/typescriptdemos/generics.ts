class Queue<T>{
    data:T[]=[]; //data is an array of T datatype which is empty by default

    push=(item:T)=>this.data.push(item);//insertion happens from last

    pop=():T | undefined => this.data.shift();//exit from the first
}

let numQueue= new Queue<number>();
numQueue.push(10);
numQueue.push(20);
numQueue.push(30);
numQueue.push(40);
console.log("Remove: "+numQueue.pop())
console.log("Remove: "+numQueue.pop())

let strQueue= new Queue<string>();
strQueue.push("User1");
strQueue.push("User2");
strQueue.push("User3");
console.log("Remove: "+strQueue.pop())
console.log("Remove: "+strQueue.pop())

//Create Queue of Employee and check