function showMessage(message) {
    document.getElementById('message').textContent = message;
}

// ... Spread

let addition = function(x,y,z) {
    return x+y+z;
}


var sum =[1,5,3,4,2,2,2,2,2,5,6,6,6];
var addAll = [9,6,7,...sum,0,24]
//can spread an arrary across parameters
showMessage(addAll);
