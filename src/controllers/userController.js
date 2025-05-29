const {registerUser} = require('../services/userService');
async function createUser(req,res){
    console.log("create user Controller called");
    console.log(req.body);
    // TODO: Register the user


    try {
    const response = await registerUser(req.body);

        return res.json({
            message: 'successfully registred the user',
            success:true,
            data: response,
            error: {}
        });
    } catch(error){
         return res.json(error.statusCode)({
            succuss: false,
             message: error.reason,
             data: {},
             error: error
         })
    }


    
}

module.exports = {
    createUser
}