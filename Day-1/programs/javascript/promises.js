function flippingCoin(){
    return new Promise((resolve,reject)=>{

        const val= Math.round(Math.random()*1);
        val?resolve('Won...'):reject('Lose...!')
    })
}
function test(){
    flippingCoin()
    .then(res=>console.log(res))
    .catch(err=>console.log("error occured: "+err))
}
async function result(){
    try{
        const res= await flippingCoin();
        console.log(res);
    }
    catch(error){
        console.log("error Occured.. "+error)
    }
}
// result();
// result();
// result();
// result();