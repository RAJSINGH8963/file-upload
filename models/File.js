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

const file = moongoose.model('file', fileSchema);

module.exports = file;
