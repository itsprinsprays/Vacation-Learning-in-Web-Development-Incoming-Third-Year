async function getUSers() {

    const response = await fetch ("https://jsonplaceholder.typicode.com/users");

    const users = await response.json();

    console.log(users[1].name);
}

getUSers();