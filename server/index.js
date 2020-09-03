require('dotenv').config()
const express = require('express')
const massive = require('massive')
const { getAll } = require('./controllers/product_controller')
const product_controller = require('./controllers/product_controller')

const app = express()

const {SERVER_PORT, CONNECTION_STRING} = process.env
 
app.use(express.json())

app.listen(SERVER_PORT, () =>{
    console.log(`Server listening on port ${SERVER_PORT}.`)
})

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err))

app.post('/api/products', product_controller.create)
app.get('/api/products', product_controller.getAll)
app.get('/api/products/:id', product_controller.getOne)
app.put('/api/products/:id', product_controller.update)
app.delete('/api/products/:id', product_controller.delete)

