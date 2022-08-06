const mongoose=require("mongoose"); 
mongoose.connect("mongodb+srv://My_database:boruto@cluster0.ajod8jv.mongodb.net/olympics").then(()=>{
    console.log("connected to the database")
}).catch((e)=>{
    console.log(e); 
})
