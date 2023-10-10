const path = require('path');

console.log(path.sep);

const filePath = path.join('/content','nhathoa','test.txt');
console.log(filePath);
//nó sẽ tạo ra \content\nhathoa\test1.txt

const base = path.basename(filePath);
console.log(base);
// dẫn tới test.txt

const absolute = path.resolve(__dirname,'content','nhathoa','test.txt');
console.log(absolute);
//xuất ra full đường dẫn