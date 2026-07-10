async function getUSers() {

    const response = await fetch ("https://jsonplaceholder.typicode.com/users");

    const users = await response.json();

    console.log(users);
}

getUSers();

async function getUserById(id) {

    const response = await fetch ("https://jsonplaceholder.typicode.com/users");

    const user = await response.json();
    const filteredUser = user
                        .find(finds => finds.id === id);
    return filteredUser;

}

async function start() {
    const user = await getUserById(100);

    if(user === undefined) console.log("User not found.");
    else console.log(user.name);
}

start();

