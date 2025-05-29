const { JWT_SECRET } = require("../config/serverConfig");
const UnauthorisedError = require("../utils/unauthorisedError");



async function isLoggedIn(req,res,next){
    const token = req.cookies["authToken"];
    if(!Token) {
        return res.status(401).json({
             success: false,
             data: {},
             error: "Not authenticated",
             message: "No Auth Token provided"
            });
    }
    try {
    const decoded = jwt.verify(token,JWT_SECRET);

    if(!decoded){
        throw new UnauthorisedError();
    }
     //if reached here,then user is authenticated  allow them to access api
   req.user = {
    email: decoded.email,
    id: decoded.id,
    role: decoded.role
   }
   next();
    } catch(error){
        return   res.status(401).json({
            success: false,
            date: {},
            error: error,
            message: "Invalied Token provided"

        });
    }

}
/**
 * This function checks if the authenticated user is an admin or not ?
 * because we will call isAdmin after isLoggedIn thats why we will recive user details
 * 
 */
 function isAdmin(req,res,next){
    const loggedInUser = req.user;
    console.log(loggedInUser);
    if(loggedInUser.role == "ADMIN"){
        console.log("User is an admin");
        next();
    } else{
        return res.status(401).json({
            success: false,
            data:{},
            message: "You are not authorised for this action",
            error: {
                statusCode: 401,
                reason: "Unauthorised user for this action"
            }
        })
    }
    
}
module.exports = {
    isLoggedIn,
    isAdmin
}