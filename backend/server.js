import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config()
const port = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('Funcionando')
})

app.listen(`${port}`,()=>{
    console.log('Listening on port')
});

