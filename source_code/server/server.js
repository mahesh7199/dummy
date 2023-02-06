const express = require('express')
const app = express()


var cors =require('cors')

app.use(cors());

app.listen(3001)

app.get('/',(req,res)=>{
    res.send('express server')
})

app.get('/:no1/plus/:no2',(req,res)=>{
    a = parseInt(req.params.no1) + parseInt(req.params.no2)
    sum = a + ''
    res.send(sum)
})
