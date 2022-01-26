function showMessage(message) {
    document.getElementById('message').textContent = message;
}

// Destructing examples

var getArrary = function () {
    return [6, 3, 5];
}

// function getData() {
//     let [, x,y, z] = getArrary();
//     console.log(`value of z is ${z}`);
//     return [x,y,z];
//   }

//Destructuring with objects
var getObjectData = function () {
    return {
        firstName: "Karthik",
        youtubeChannel: "Learn Smart Coding",
        technologyTrained: {
            frontEndSkills:"Angular, JS",
            backEndSkills:"DOTNET CORE, C#, etc"
        }
    };
}

function getData() {
    let { firstName,
        youtubeChannel,
        technologyTrained:{
            backEndSkills
        }
    } = getObjectData();

    return [firstName, youtubeChannel,backEndSkills];
}

showMessage(`${getData()}`);
console.log(`${getData()}`);