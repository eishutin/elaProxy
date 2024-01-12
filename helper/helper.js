module.exports = function(){
    this.validatorLog = function(req){
        console.log('_________________________________________________');
        console.log('Request body\n' + JSON.stringify(req.body));
        return 0;
    },

    this.incomingRequestLog = function (req, url){
        console.log(`\n\nSent request to ${url}` + req.url);
        return 0;
    },

    this.outcommingRequestLog = function (res){
        console.log(`\n\nResponse body\n${res}\n`);
        return 0;
    }
}

