const express = require('express');
const dbconnect = require('./mongodb');
const mongoDB = require('mongodb')
const app = express();

app.use(express.json());

app.get('/', async (req, resp)=>{

    let data = await dbconnect();
    data = await data.find().toArray();
    console.log(data) 
    resp.send(data)
})

app.post('/', async(req, res)=>{
let data =await dbconnect();
let result =await data.insertOne(req.body);
res.send(result)
})

app.put ('/', async(req, resp)=>{
    let data = await dbconnect();
    let result= data.updateOne(
        {name: 'note 7'},
        {$set:req.body}
        )
})

app.delete('/:id', async(req, res)=>{
let data = await dbconnect();
let result = await data.deleteOne({_id: new mongoDB.ObjectId(req.params.id)})
console.log(req.params.id);
res.send(result);
})
app.listen(4500);