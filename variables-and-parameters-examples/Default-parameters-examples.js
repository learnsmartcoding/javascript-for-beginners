function showMessage(message) {
    document.getElementById('message').textContent = message;
}

// Default paramters examples

var getNumbers = function (x = 1, y = 2, z = 3) {
    return [x, y, z];
}

var getGitHubDetails = function (url,
    { username = "learnsmartcoding",
        repo = "angular-for-beginner" }) {
    return repo;
}


var getData = function () {
    let [a, b, c] = getNumbers(undefined, 6, 8);
    return [a, b, c];
}
var getChannelName = function (name = "Learn Smart Coding") {
    let channel = name;

    return channel;
}

showMessage(`${getGitHubDetails("github.com",{repo:undefined})}`);
console.log(`${getGitHubDetails("github.com",{repo:""})}`);