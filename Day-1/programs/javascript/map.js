var map = new Map();
map.set(1,"sonam");
map.set(2,"alex");
map.set(3, "clair");
console.log(map);
console.log("Size: "+map.size)
console.log("Map has the key 3? "+map.has(3))
//get the value on the basis of key
console.log("Get value of key 2: "+map.get(2))
//delet on the basis of key
console.log(map.delete(1)+" deleted")
map.clear();
console.log("Aftre Clear: "+map.size)