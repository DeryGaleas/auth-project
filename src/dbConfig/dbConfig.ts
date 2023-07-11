import mongoose, { connection } from "mongoose";
export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection

        connection.on('connected', () =>{
            console.log('MongoDB connected successfully')
        })

        connection.on('error', (err)=>{
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err)
        })
    } catch(error){
        console.log('Something goes wrong!')
        console.log(error)
    }

}