const AppError = require("./appError");

class InternalServerError extends AppError {
    constructor(){
        
        supper(`It's not you its's our server where somthing went wrong`,500);
    }
}

module.exports = InternalServerError;