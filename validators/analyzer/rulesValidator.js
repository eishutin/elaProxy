function isValid(req){
    try{
        var rules = req.body;
        return Object.keys(rules).length != 0 &&
               Object.keys(rules).every(key => typeof key === 'number' || !isNaN(key)) &&
               Object.values(rules).every(rule => rule.length == 0 ||
                                                  (rule.every(element => typeof element == 'string' &&
                                                                         element.length > 0
                                                                         )));
    }
    catch(e){
        return false;
    }
};

module.exports = { isValid };