function isValid (req){
    try{
        var specArray = req.body;
        return specArray.length != 0 &&
               specArray.every(element => (typeof element === 'number' || !isNaN(element)) && element.length == 3);
    }
    catch(error){
        return false;
    }
};

module.exports = { isValid };