const {
    urlencoded
} = require('express');
const express = require('express');
const routes = require('./routes/routes');
const app = express()

const PORT = process.env.PORT
app.listen(PORT || 8080, () => {
    console.log('The server is listening to you on port 8080');
})

app.use(express.json())
app.use(urlencoded({
    extended: true
}))
app.use(express.static('public'))
app.set('view engine', 'ejs')

routes(app)