var express=require('express');
var lodash=require('lodash')
var apiserver=express();
var syrups=['ashwini','ramya','raju'];
apiserver.get('/syrup',(req,res)=>{
    res.json(syrups);
})
apiserver.post('/syrup',(req,res)=>{
    var name=req.query.name
    syrups.push(name)
    res.sendStatus(201)
})
apiserver.delete('/syrup',(req,res)=>{
    syrups.pop();
    res.sendStatus(201);
})
apiserver.put('/syrup',(req,res)=>{
    var name=req.query.name;
    var newname=req.query.newname;
    var i=lodash.indexOf(syrups,name)
    syrups[i]=newname;
    res.sendStatus(201)
})
apiserver.listen(5000,()=>{
    console.log("server is responding 5000 port")})