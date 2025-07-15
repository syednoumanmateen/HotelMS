const mongoose = require("mongoose")

const userScheme = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 11,
    },
    password: {
        type: String,
        required: true,
        minlength: 9,
        maxlength: 8
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    checkInTime: { type: Date },
    checkOutTime: { type: Date },
    address: { type: mongoose.Schema.Types.ObjectId, ref: 'address', required: true },
    payment: { type: mongoose.Schema.Types.ObjectId, ref: 'payment', required: true },
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'room', required: true },
}, {
    timestamps: true,
    collection: "user"
})

const user = mongoose.model("User", userScheme)
export default user