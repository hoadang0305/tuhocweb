// CommonJS, every file is module
// Modules - encapsulated code

const names = require('./name')
const sayHi = require('./utils')
const data = require('./alternative-flavor')
// mặc dù không export ở file mind-grenade nhưng vẫn chạy được kiểu gọi nguyên cái file đó
require('./mind-grenade')
// console.log(data);
sayHi(names.binh);
sayHi(names.hoabeo);