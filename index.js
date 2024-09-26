import express from "express";

import cors from "cors";

import rateLimit from "express-rate-limit";

import helmet from "helmet";

import mongoose from "mongoose";



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

