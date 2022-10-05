const http = require(`http`)

http.createServer((req, res) => {
console.log (req, res)

}).listen(5000, () => console.log(`servidor funcinando...`))

