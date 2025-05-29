const AppError = require("./appError");

class UnauthorisedError extends AppError {
        constructor(properties, resource){
        supper(`User is not authroised properly`,401);

    }
}

module.exports = UnauthorisedError;