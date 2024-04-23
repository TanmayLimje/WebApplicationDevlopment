const dbConnect = require('./mongodb');
const express = require('express');

const app = express();
app.use(express.json())

//get
app.get('/',async(req,res)=>{
    let result = await dbConnect();
    result = await result.find().toArray();
    res.send(result);
})

//post
app.post('/',async(req,res)=>{
    let result = await dbConnect();
    result = await result.insertOne(req.body);
    res.send("data inserted succesfully");
})

//put
app.put('/:name',async(req,res)=>{
    let result = await dbConnect();
    result = await result.updateOne({name:req.params.name},{$set:req.body});
    res.send("data updated succesfully");
})

//delete
app.delete('/:name',async(req,res)=>{
    let result = await dbConnect();
    result = await result.deleteOne({name:req.params.name});
    res.send("data deleted succesfully");
})

app.listen(3000);


