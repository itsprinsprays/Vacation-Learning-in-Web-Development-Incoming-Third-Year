async function getUSers() {

    const response = await fetch ("https://jsonplaceholder.typicode.com/users");

    const users = await response.json();

    console.log(users);
}

getUSers();

async function getUserById(Id) {

    const response = await fetch ("https://jsonplaceholder.typicode.com/users");

    const user = await response.json();
    const filteredUser = user
                        .find(finds => finds.id === Id);

    return filteredUser;

}

async function start() {
    const user = await getUserById(1);

    console.log(user.name);
}

start();

