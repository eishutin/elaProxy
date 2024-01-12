function isValid (req){
    try{
        let fileName = req.body.filename;
        return fileName != null &&
               fileName != undefined &&
               typeof fileName == "string" && 
               fileName.length > 8;
    }
    catch(e){
        return false;
    }
};

module.exports = {isValid};
 