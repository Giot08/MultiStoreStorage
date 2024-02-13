import express from 'express';
import 'dotenv/config'
import cors from "cors"
import db from './db/db.js'

import { mainRoutes, storeRoutes } from './router/index.js'

const server = express();
const port = process.env.SERVICE_PORT || 3000;

// Cors
const corsOptions = {
    origin: "*",
};

//Cors
server.use(cors(corsOptions));
//HTTP forms
server.use(express.urlencoded({extended: true}))

//DB
try {
    await db.authenticate();
    db.sync();
    console.log("DB Connected");
} catch (error) {
    console.log(error)    
}

//Routes
server.use("/", mainRoutes,storeRoutes );

server.listen(port, () => {
    console.log(`Server live in: http://localhost:${port}`);
})