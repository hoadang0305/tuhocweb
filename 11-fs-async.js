const {readFile,writeFile} = require('fs');

//đọc file và kiểm tra lỗi
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err) {
            console.log(err);
            return
        }
        const second = result;
        writeFile('./content/three.txt',`đây là kết quả: ${first}, ${second}`,(err,result)=>{
            if (err) {
                console.log(err);
            }
            console.log('done task  x!');
        })
    })
})