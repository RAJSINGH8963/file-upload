const moongoose = require('mongoose');

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

const File = moongoose.model('File', fileSchema);

module.exports = File;
