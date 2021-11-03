const express = require('express')
const router = express.Router()

// Example wizard
require('./routes/example-wizard')(router)
require('./routes/example-list')(router)

// Add your routes here - above the module.exports line

module.exports = router
