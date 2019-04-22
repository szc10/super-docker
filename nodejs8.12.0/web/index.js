const express = require('express')
const app = express()
let num = 0;
app.get('/web', (req, res) => {
    num++;
    res.send('Hello World! this is web')
})

app.get("/num",(req,res)=>{
    res.send("num:"+num);
})

app.get("/v",(req,res)=>{
   res.send(require('process').version);
});

app.listen(3001, () => console.log('Example app listening on port 3001!'))