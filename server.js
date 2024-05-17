const app=require("./app");
const dotenv=require('dotenv');
const http=require('http');
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/Portfolio');

mongoose.connection.on('connected',()=>{
  
  console.log('Database connected successfully')
}
);


//server starting
const port = process.env.PORT||5000 ;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});