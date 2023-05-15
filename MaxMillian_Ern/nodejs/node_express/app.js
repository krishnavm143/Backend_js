const http = require('http');

const express = require('express')

const app = express()

// app.use((req, res, next) => {
//     console.log('in Middelware')
//     next()
// })

app.use('/add-product', (req, res, next) => {
    console.log('in another Middelware')
    res.send('<h1>In "Add Product" Page</h1>')
})


app.use('/', (req, res, next) => {
    console.log('in another Middelware')
    res.send('<h1>Hello from Express</h1>')
})

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000)