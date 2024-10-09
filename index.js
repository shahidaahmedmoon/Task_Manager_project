import express from "express";

import cors from "cors";

import rateLimit from "express-rate-limit";

import helmet from "helmet";

import mongoose from "mongoose";

import { DATABASE, MAX_JSON_SIZE, REQUEST_TIME, REQUEST_NUMBER, WEB_CACHE, URL_ENCODE} from "./app/config/config.js";

import router from "./routes/Api.js";



const app = express();



//App use default middleware

app.use (cors());
app.use (express.json({limit:MAX_JSON_SIZE}));
app.use (express.urlencoded({extended:URL_ENCODE}));
app.use(helmet());




//App use limiter

const limiter=rateLimit({windowMs:REQUEST_TIME, max:REQUEST_NUMBER});
app.use (limiter);


//cache
app.set('etag', WEB_CACHE);



//Database Connect

mongoose.connect (DATABASE, {autoIndex:true}).then(()=>{
    console.log("MongoDB connected");
}).catch(()=>{
    console.log("MongoDB disconnected"); 
})

app.use ("/api",router);


const PORT = process.env.PORT || 5050;

app.listen (PORT, ()=>{
 console.log ("server started on port" + PORT);
})
