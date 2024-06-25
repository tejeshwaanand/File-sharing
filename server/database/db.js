import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();
const DBconnection = async ()=>{
    try{
        const MONGODB_URI = process.env.REACT_APP_DB_URI;
        await mongoose.connect(MONGODB_URI);
        console.log("Database connected successfull");
    }catch(error){
        console.error('Error while connecting with the database',error.message);
    }
}
export default DBconnection;