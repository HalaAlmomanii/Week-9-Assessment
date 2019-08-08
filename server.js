const express = require('express')
const app = express()
app.use(express.json())

app.get("/test",(req,res)=>{
    res.json("hello")
})

app.get("/test1",(req,res)=>{
    res.json(list)
})

app.post("/test2",(req,res)=>{

    let newtask=req.body
    list.push(newtask)
res.json(list)
})




const PORT=9000
app.listen(PORT,()=>console.log(`workingon ${PORT}`))





const list=[
{id:1,title:"making tea"},
{id:2,title:"making caking"},
{id:3,title:"leave JOB"}]