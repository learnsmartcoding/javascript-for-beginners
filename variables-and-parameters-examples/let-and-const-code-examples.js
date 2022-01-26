function showMessage(message) {
    document.getElementById('message').textContent = message;
}

// var getData = function(boolFlag){
   
//     if(boolFlag){
//         let x= 5;   //this becomes blocked scope       
//         return x;
//     }    

// }

// var getData = function(boolFlag){
   
//     for(let x=0;x<10;x++)  {
     
//     }
//     return x;
// }

//Next is const
const x = 10;
var getData = function(boolFlag){
   
   
    if(boolFlag){     
        var x=15; //the last assignment for var variable wins     
    }
    return x

}


showMessage(`Value is => ${getData(true)}`);
console.log(`Value is => ${getData(true)}`);