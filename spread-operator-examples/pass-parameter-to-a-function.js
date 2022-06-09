function spreadForFunctionsArguments() {
   let addRes= addition(1,2,3);
    console.log(addRes);

    let arr = [1,2,3];
    let addRes1 = addition(...arr);
    console.log(addRes1);
    showMessage(addRes1);
    
}

let addition = function(x,y,z) {
    return x+y+z;
}


spreadForFunctionsArguments();
updateTitle("Pass parameters using spread");