const express = require('express');
const { sensitiveHeaders } = require('http2');
const { send } = require('process');
const app = express();
const port = process.env.PORT || 3000
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
app.get('/about',(req, res)=>{

res.send('This is the about page')
})
app.listen(port, ()=>{
console.log('listening on port ' +port)
})