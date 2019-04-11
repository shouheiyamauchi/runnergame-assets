const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

app.use(cors())

app.use('/static', express.static('public'))

app.listen(port, () => console.log(`Server listening on port ${port}!`))
