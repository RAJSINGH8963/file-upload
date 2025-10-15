const File = require("../models/File");

// localFileUpload controller  

exports.localFileUpload = async(req , res ) => {
    try{
        // fetch file 
        const file = req.files.file ; 
        console.log("File AAgyi JRR " , file );
        let part = file.name.split('.') ;
        let path = __dirname + "/files/" + Date.now()  + `.${part[part.length -1]}` ; 
        console.log("PATH -> " , path ); 

        file.mv(path , (err) => {
            console.log(err) ; 
        }); 
        
        res.json({
            success:true,
            message:'Local File Upload Successfully ', 
        })
    }catch(error){
        console.log("not able to upload local file");
     console.log(error);
    }
}
