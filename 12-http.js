const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome home page')
    }
    if(req.url === '/about'){
        res.end('here is our history!')
    }
    res.end(`
        <h1>Opps!</h1>
        <p>can't see this gape</p>
        <a href="/">back home</a>
    `)
})
 server.listen(5000);