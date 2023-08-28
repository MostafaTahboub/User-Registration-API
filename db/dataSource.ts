import { DataSource } from "typeorm";
import {  User } from "./entities/User";

const dataSource = new DataSource({
    type:"mysql",
    host:"localhost",
    port:3306,
    username:"root",
    password:"",
    database:"User_Registration",
    entities:[User],
    synchronize:false,  
    logging:true
   })
   dataSource.initialize().then(()=>{
       console.log('connected to database :)');
   })
   .catch((err)=>{
       console.log('failed to connect to db !! '+err);
   })
   
   export default dataSource;
   
