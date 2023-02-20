var map = new Map();
map.set(1,"sonam");
map.set(2,"alex");
map.set(3, "clair");
console.log("Iterate using Entries")
let entries= map.entries();
for(let x of entries){
    console.log(x[0]+" "+x[1])
}
console.log("Iterate using keys")
let keys= map.keys();
for(let key of keys){
    console.log(key+": "+map.get(key))
}
console.log("Iterate using values")
let values=map.values();
for(let v of values){
    console.log(v)
}
map.forEach(function(value,key){
    console.log(key+": "+value)
})