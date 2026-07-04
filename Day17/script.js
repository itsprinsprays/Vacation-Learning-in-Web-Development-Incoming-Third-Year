function waitTwoSeconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Finished waiting!')
        }, 2000);
    });
}

async function  start() {
console.log("start");

let result = await waitTwoSeconds();
console.log(result);
console.log("end");

}

start();