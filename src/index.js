const express = require('express')
const app = express()
const indexRoutes = require('./routes/index.routes')

const { PORT } = require('./config')

require('./database')

app.use(indexRoutes)

app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`))