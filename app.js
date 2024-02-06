import express from 'express';
import 'dotenv/config'

const server = express();
const port = process.env.PORT || 3002;

server.get('/', (req, res) => {
    res.send('Hola mundo!');
})

console.log(process.env.S3_BUCKET)

server.listen(port, () => {
    console.log("Server live in: ", port);
})