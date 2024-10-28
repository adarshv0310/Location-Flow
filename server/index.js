import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';

import mongoose from 'mongoose';


// dotenv config
dotenv.config();

// mongodb connection

const URI = process.env.MONGO_URL;
mongoose.connect(URI)
    .then(() => console.log('Mongodb connected'))
    .catch((err) => console.log("Mongodb error : ", err));






// rest object 
const app = express();


// middlewares
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());



// port 

const port = process.env.PORT || 8001;


app.listen(port, () => {
    console.log(
        `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
        .bgCyan.white
    );
});