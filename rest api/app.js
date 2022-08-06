const express=require("express"); 
const app=express();
require("./conn.js"); 
const Mensranking=require('./models/mern.js'); 
app.use(express.json()); 
// get request: 
app.get('/mens',async(req,res)=>{
    try{

      const getMens= await mensranking.find({}); 
      res.status(200).send(getMens); 



    }
    catch(e){
  res.status(400).send(e); 
  
    }
})
//post request; 

app.post('/mens',async(req,res)=>{
    try{
  const addingmenrecords=new Mensranking(req.body); 
  const saved=await addingmenrecords.save(); 
   res.status(201).send(saved); 

    }
    catch(e){
        res.status(400).send(e); 


    }
})
app.listen(9001,()=>{console.log("listening....")})
