import express from 'express';
import db from './db/dataSource'
import UserRouter from './routes/User.router'
const app=express();
app.use(express.json())

const PORT=process.env.port ||3000;

app.use('/user',UserRouter);

app.get('/',(req,res)=>{
    res.send('hello world ')
});

app.listen(PORT,()=>{
    console.log(`the app is listen to port ${PORT}`);
    db.initialize();
});


