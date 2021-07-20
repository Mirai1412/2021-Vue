const http = require('http')

                //http는 객체             //람다식
const server = http.createServer((req, res)=>{
    res.end('Hello')
})

server.listen(3000) // 포트번호