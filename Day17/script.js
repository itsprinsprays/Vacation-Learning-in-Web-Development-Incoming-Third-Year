// function waitTwoSeconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Finished waiting!')
//         }, 2000);
//     });
// }

// async function  start() {
// console.log("start");

// let result = await waitTwoSeconds();
// console.log(result);
// console.log("end");

// }

// // start();

// async function getPost() {
//   console.log("Fetching post...");
//   let response = await fetch("https://jsonplaceholder.typicode.com/posts/30");
//   let data = await response.json();
//   console.log("Post title:", data.title);
// }

// getPost();


function login(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let username = prompt("Enter username: ");
            let password = prompt("Enter a password: ");
                if(username === "Prince" && password === "12345") {
                  resolve(`Welcome ${username}!`)
              
                } else {
                    reject("Invalid Username or password");
                }
        }, 2000);
    });
}

async function start() {
    try {
        const logins = await login();
        document.querySelector("#login").innerHTML = logins;
    } catch(error) {
        document.querySelector("#login").innerHTML = error;
    }

}

start();