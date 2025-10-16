
//  app create 
const express = require('express');
const app = express();

const nodemailer = require('nodemailer');

// Port find karna hai
require('dotenv').config(); 
const PORT = process.env.PORT || 3000 ; 
// middleware use karna hai

app.use(express.json());

const fileupload = require('express-fileupload'); 

app.use(fileupload({
    useTempFiles:true,
    tempFileDir:'/tmp/' 
}));


// db se connect  karna hai 

const db = require('./config/database');
db.connect();

// cloud se connect karna hai

const cloudinary = require('./config/cloudinary');
cloudinary.cloudinaryConnect();
// api route mount karna hai

const Upload = require('./routes/FileUpload');
const { videoUpload } = require('./controllers/fileUpload');
app.use('/api/v1/upload', Upload);

// activate server 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});