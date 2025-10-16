const moongoose = require('mongoose');
const nodemailer = require('nodemailer');
const fileSchema = new moongoose.Schema({ 
    name: { 
        type:String,
        required: true,
    },imageUrl:{
        type:String, 
    },tags:{
        type:String,
    },email:{
        type:String,
    }
}); 

// post middleware 
fileSchema.post('save' ,  async function(doc){
    try{
        console.log("doc " , doc );

        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });

        let info = await transporter.sendMail({
            from: `"File Upload Service" <${process.env.MAIL_USER}>`, // sender address
            to: doc.email, // list of receivers
            subject: "File Upload Successful ✔", // Subject line
            text: `Your file ${doc.name} has been uploaded successfully.`, // plain text body
            html: `<b>Your file ${doc.name} has been uploaded successfully.</b>`, // html body
        });
}catch(error){
        console.log("Error in post middleware of file schema");
        console.log(error);
    }   
} );

const File = moongoose.model('File', fileSchema);

module.exports = File;
