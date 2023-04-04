import fs from 'fs';
import path from 'path';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// TODO: hmm...
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json()); // Add this to parse JSON request bodies

app.use(express.static(path.join(process.cwd(), 'public')));




app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'public/index.html'));
});




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// const host = process.env.IP_ADDRESS
// console.log(host)

// app.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });
