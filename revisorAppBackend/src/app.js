const express = require('express');
const router = require('./routes')
const app = express();


app.use(router)

app.get('/',(request,response)=>{
    response.status(200).send("<h1>Testando</h1>")
})

module.exports = app;
