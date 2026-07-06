function getEmployee(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const employee = [
                {id: 1, name: "Prince", departmentId: 102},
                {id: 2, name: "John", departmentId: 101}
            ];
            
           const get = employee
                        .filter(gets => gets.id === id);
            resolve(get);

        }, 2000);
    });
}

function getDepartment(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const department = [
                {id: 101, name: "IT Department"}
            ];

            const get = department
                        .filter(gets => gets.id === id);
            resolve(get);
        }, 3000);
    });
}

async function start() {
    let load = document.querySelector("#LoadingEmployee");
    load.innerHTML = "Loading employee...";
    const employee = await getEmployee(2);
    console.log(employee);
    console.log(employee.departmentId);

    const department = await getDepartment(employee.departmentId);
    console.log(department);
}

start();