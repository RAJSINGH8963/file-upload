
//  app create 
const express = require('express');
const app = express();

// Port find karna hai
require('dotenv').config(); 
const PORT = process.env.PORT || 3000 ; 
// middleware use karna hai

app.use(express.json());

const fileupload = require('express-fileupload'); 

app.use(fileupload());

// db se connect  karna hai 

const db = require('./config/database');
db.connect();

// cloud se connect karna hai

const cloudinary = require('./config/cloudinary');
cloudinary.cloudinaryConnect();
// api route mount karna hai

const upload = reqire('./routes/FileUpload');
app.use('/api/v1/upload', upload);

// activate server 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});