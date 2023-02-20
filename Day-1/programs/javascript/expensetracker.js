let myExpense= new Map();

function addExpense(key,ex){
    myExpense.set(key,ex);
}
function removeExpenses(key){
    myExpense.delete(key);
}
function calculateBudget(){
    total=0;
    for(let val of myExpense.values()){
        total= total+val;
    }
    return total;
}
addExpense("regular",56000);
addExpense("stationary",2500);
addExpense("extra",5000);
console.log(calculateBudget())