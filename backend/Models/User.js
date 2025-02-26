const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        // email: {
        //     type: String,
        //     unique: true
        // },
        password: {
            type: String
        },
        // contact: {
        //     type: String,
        //     unique: true,
        //     default: null
        // },
        address: {
            type: String,
            default: null
        },
        status: {
            type: Boolean,
            default: true
        },
        // forgot_password_otp: {
        //     type: Number,
        //     default: null
        // }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("User", UserSchema);
module.exports = User;