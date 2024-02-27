"use server"
const mongoose = require("mongoose");

const connection ={};

export const connectToDb = async () =>{
    try {
        
        // checking if coonection is there after referesh page
        if(connection.isConnected){
            //console.log("using existing connection");
            return;
        }

        // creating new connection
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
        // console.log("connected");

      } catch (error) {
       console.log(error.message)
        throw new Error('Error connecting to databse')
      }
};
