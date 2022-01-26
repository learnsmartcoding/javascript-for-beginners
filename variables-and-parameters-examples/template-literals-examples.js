function showMessage(message) {
    document.getElementById('message').textContent = message;
}

//Tempate literals examples

var url = "http://apiserver";
var controller = "product";
var id="3";

//var apiURL=url +"/"+ controller +"/"+ id;
var apiURL =`${url}/${controller}/${id}`; //backtick `
showMessage(apiURL);
