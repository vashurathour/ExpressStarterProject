

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "first Name is required"],
        minlength: [5,"first name must be atleast 5 character long"],
        lowercase: true,
        trim: true, //if the user gives extra spaces then it will automatically remove it

        maxlength: [20,"First name should be less than or equal to 20 character"]
    },
    lastName: {
        type: String,
        required: [true, "first Name is required"],
        minlength: [5,"first name must be atleast 5 character long"],
        lowercase: true,
        trim: true, //if the user gives extra spaces then it will automatically remove it

        maxlength: [20,"First name should be less than or equal to 20 character"]
    },

    mobileNumber: {
        type: String,
        trim: true,
        maxlength: [10,"phone number should be of length 10"],
        minlength: [10,],
        unique: [true,"phone number is already in use"],
        required: [true, "phone number should be provided"]
    },

    email: {
        type: String,
        trim: true,
        unique: [true,"email  is already in use"],
        required: [true, "email should be provided"],
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,'please fill the valied email address']

    },

    password: {
        type: String,
        required: [true, "password should be provided"],
        minlength: [6,"password should be minimum 6 character long"]
    },
    role: {
        type: String,
        enum: ["USER","ADMIN"],
        default: "USER"
    }
}, {
    timestamps: true
});
//hooks
userSchema.pre('save', async function (){
    // here u can modify your user before it is saved in mongodb
    const hashedpassword = await  bcrypt.hash(this.password,10);
    this.password = hashedPassword;
});
// user collection 
const User = mongoose.model("User",userSchema);//collection

module.exports = User;