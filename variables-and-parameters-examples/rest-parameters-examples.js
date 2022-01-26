function showMessage(message) {
    document.getElementById('message').textContent = message;
}

// Rest Paramters

//old plain javascript way
let addition = function() {
    let result = 0;
    for(let i=0; i< arguments.length; i++){
        result += arguments[i];
    }

    return result;
}

let sum = function(name,...numbers) {
    let result = 0;
    numbers.forEach(function(n){
        result +=n;
    });

    return [name,result];
}

//showMessage(addition(1,2,3));
showMessage(sum("learnsmartcoding"));
