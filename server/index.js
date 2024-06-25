import  express  from "express";
import DBconnection from "./database/db.js";
import router from "./routes/routs.js";
import cors from 'cors';
const app = express();
app.use(cors());

app.use('/',router);
const PORT =8000;

DBconnection();

app.listen(PORT,()=> console.log(`server is running on PORT ${PORT}`));