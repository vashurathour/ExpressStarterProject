const AppError = require("./appError");

class BadRequestError extends AppError {
    constructor(invalidParams){
        // properties: []

       let message = "";
       invalidParams.forEach(params => message += `${params}\n`);      
        
       super(`The request has the following invalid parameters \n${invalidParams} `,400);
    }
}

module.exports = BadRequestError;