const AppError = require("./appError");

class NotFoundError extends AppError {
        constructor(properties, resource){
        supper(`Not able to find  ${resource}`,404);

    }
}

module.exports = NotFoundError;