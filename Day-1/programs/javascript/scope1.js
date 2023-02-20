var i=10; //globall
if(i==10){
    var i=20;
}
function myFunction(){
    var i=30;
}

myFunction();

console.log(i)
var foo=1; //global
var y;
function x(){
    //local scope (block scope)
    var foo=2;
    y= function(){ var foo=3}
}
x();
y();
console.log(foo);




