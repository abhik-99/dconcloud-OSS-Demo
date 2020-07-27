const express = require('express')
const {AccessKeyID, AccessKeySecret} = require('../config/access_key.json')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))