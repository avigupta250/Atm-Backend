const express=require("express");
const app=express();
 const connectDB = require("./config/database");

 const createAccount=require("./controllers/createAccount");
 const getBalance=require("./controllers/getBalance");
const cashDeposit = require("./controllers/cashDeposit");
const cashWithdrawl = require("./controllers/cashWithdrawl");


const PORT=4000;
app.use(express.json());

app.post("/createaccount",createAccount);
app.get("/getbalance",getBalance);
app.put("/cashdeposit",cashDeposit);
app.put("/cashwithdrawl",cashWithdrawl);


app.listen(PORT,()=>{
  console.log(  `App is listening at port no.4000`)
})

connectDB();

app.get("/",(req,res)=>{
  res.send("<h1>Hello Avi</h1>")
})

