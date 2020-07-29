const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const {listBuckets, getImage} = require('./controller/buckets')

var handlebars = require('express-handlebars')
app.set('views', path.join(__dirname + '/views'))

app.use(express.static(path.join(__dirname, '/public')))

app.set('view engine', '.hbs')
app.engine('hbs', handlebars({
    extname: 'hbs',
    layoutsDir: __dirname + '/views/layouts'
    
}));


app.get('/', listBuckets)
app.get('/image', getImage)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))