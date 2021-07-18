const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/api/hello', (req, res) => res.send({message: 'Hello World!'}))

app.listen(3000, () => console.log('Example app listening on port 3000!'))