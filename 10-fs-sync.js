const {readFileSync,writeFileSync} = require('fs');

//đọc file
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first,second);

//ghi file
writeFileSync('./content/three.txt',`đây là kết quả: ${first}, ${second}`,{flag: 'a'});
//nếu gắn thêm flag thì ghi nối tiếp chứ không đè lên data cũ
