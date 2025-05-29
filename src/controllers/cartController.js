const AppError = require("../utils/appError");
const {getCart, modifyCart, clearProductsFromCart } = require("../services/cartService");

async function getCartByUser(req,res){
    try {
        const cart = await getCart(req.user.id);
        return res.status(200).json({
        success: true,
        message: "Successfully fetched the cart",
        error: {},
        data: cart 
    })
    } catch(error){
        console.log(error);
        if(error instanceof AppError){
            return res.status(500).json({
        success: false,
        message: "Somthing went wrong",
        error: error,
        data: {}  
            })
        }
    }
}

async function modifyProductTocart(req,res){
    try {
        const cart = await modifyCart(req.user.id, req.params.productId, req.params.operation == "add");
        return res.status(200).json({
        success: true,
        message: "Successfully added to the cart",
        error: {},
        data: cart 
    })
    } catch(error){
        console.log(error);
        if(error instanceof AppError){
            return res.status(500).json({
        success: false,
        message: "Somthing went wrong",
        error: error,
        data: {}  
            })
        }
    }

    async function clearCartbyId(req,res){
        try {
        const cart = await clearProductsFromCart(req.user.id);
        return res.status(200).json({
        success: true,
        message: "Successfully cleared all products from  the cart",
        error: {},
        data: cart 
    })
    } catch(error){
        console.log(error);
        if(error instanceof AppError){
            return res.status(500).json({
        success: false,
        message: "Somthing went wrong",
        error: error,
        data: {}  
            })
        }
    }
    }
}

module.exports = {
    getCartByUser,
    modifyProductTocart,
    clearCartbyId
}