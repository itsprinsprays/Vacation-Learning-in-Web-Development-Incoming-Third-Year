function getEmployee(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const employee = [
                {id: 1, name: "Prince", departmentId: 102},
                {id: 2, name: "John", departmentId: 101}
            ];
            resolve(employee.id === id);

        }, 2000);
    });
}

function getDepartment(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve = [
                {id: 101, name: "IT Department"}
            ];
        }, 3000);
    });
}

async function start() {
    let load = document.querySelector("#LoadingEmployee");
    load.innerHTML = "Loading employee...";
    const employee = await getEmployee(1);
    console.log(employee);
}

start();