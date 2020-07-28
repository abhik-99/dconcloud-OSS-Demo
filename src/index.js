const express = require('express')
const path = require('path')
const {AccessKeyID, AccessKeySecret} = require('../config/access_key.json')
const app = express()
const port = 3000


var handlebars = require('express-handlebars')
app.set('views', path.join(__dirname + '/views'))

app.use(express.static(path.join(__dirname, '/public')))

app.set('view engine', '.hbs')
app.engine('hbs', handlebars({
    extname: 'hbs',
    layoutsDir: __dirname + '/views/layouts'
    
    }));
app.get('/', (req, res) => {
    //  res.send(__dirname)
    res.render('main', { layout: 'index'})
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))