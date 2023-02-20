function fetchdata(callback){
    setTimeout(
        function(){
            console.log("Data Fetched")
            callback();
        },
    3000)
    
}
function displayData(){
    console.log("Data Display")
}

fetchdata(displayData); //passing displayData as para in fetchdata
