const {hostname } = require('os')

const http = require('http')

const message = 'Hello World\n'

const port = 8080

const server = http.createServer((request, response) => {
    response.statusCode = 200
    response.setHeader('Content-Type', 'test/plain')
    response.end(message)
})

server.listen(port, hostname, () => {
console.log(`Server is running at http://${hostname()}:${port}/`)
})