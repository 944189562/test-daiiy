const http = require('http')

const server = http.createServer((req, rep) => {
    console.log('receive ...')
    rep.end('Hello World!')
})

server.listen(3000)