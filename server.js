const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/static', express.static('public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
