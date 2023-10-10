const os = require('os');
const { release } = require('process');

//info about current user
const user = os.userInfo()
console.log(user);

//method return the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalNem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);