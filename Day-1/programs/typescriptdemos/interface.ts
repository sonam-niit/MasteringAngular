interface Color{
    color:string;
}
interface Length extends Color{
    length:number;
    mymethod():void;
}
var shape= <Length>{};
shape.color="blue"
shape.length=90;

console.log("Color of  My Shape is "+shape.color)
console.log("Length of My Shape is "+shape.length)
class Impl implements Length{
    length: number;
    mymethod(): void {
        console.log("Method Implemented")
    }
    color: string;
}
let obj1:Length= new Impl();