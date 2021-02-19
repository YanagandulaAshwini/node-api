var express=require('express');
var apiserver=express();
var bodyparser=require('body-parser');
apiserver.use(bodyparser.json());
var arr=[{"id":1,"name":"ashwini","marks":500},
         {"id":2,"name":"raju","marks":300},
         {"id":3,"name":"ramya","marks":600},
         {"id":4,"name":"akhil","marks":400}
]
apiserver.get('/product',(req,res)=>{
    res.json(arr);
    res.sendStatus(200);
})

apiserver.post('/product',(req,res)=>{
      var body=req.body;
      arr.push(req.body);
      console.log(body);
    res.sendStatus(200);   
})
apiserver.put('/product',(req,res)=>{
    var obj=JSON.stringify(req.body)
    var obj1=JSON.parse(obj);
    var newid=obj1.id;
    var newname=obj1.name;
    var newprice=obj1.price;
    for(i=0;i<arr.length;i++)
    {
        if(newid===arr[i].id)
        {
            arr[i].name=newname;
            arr[i].price=newprice;
        }
    res.sendStatus(201);
    } 
    res.json(arr);
    res.status(200);  
})
apiserver.delete('/product',(req,res)=>{
    arr.pop();
    res.sendStatus(200);    
})
apiserver.listen(5000,()=>{
    console.log("server started on port 5000");    
})