function showMessage(message) {
    document.getElementById('message').textContent = `Output: ${message}`;
}

function updateTitle(message) {
    document.getElementById('title').textContent = `Demo | ${message}`;
}












//Tempate literals examples

// var url = "http://apiserver";
// var controller = "product";
// var id="3";

// //var apiURL=url +"/"+ controller +"/"+ id;
// var apiURL =`${url}/${controller}/${id}`; //backtick `
// showMessage(apiURL);
