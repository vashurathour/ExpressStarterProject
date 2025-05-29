const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            }
        ],
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: "ORDERED",
        enum: ["ORDERED","CANCELLED","PROCESSING","OUT_FORDELIVERY"]
    },
    address: {
        type: String,
        minLength: [10,"Address should be of atleast 10 characters"]
    },
    paymentMethod: {
        type: String,
        enum: ["ONLINE","CASH"],
        default: "CASH"
    }
},{
    timestamps: true
});

const Order = mongoose.model('Order',orderSchema);

module.exports = Order;
           