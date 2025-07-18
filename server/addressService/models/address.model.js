import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
    addressLine1: { type: String, required: true },
    addressLine2: { type: String },
    country: { type: String, required: true },
    state: { type: String, required: true },
    district: { type: String, required: true },
    region: { type: String, required: true },
    postalCode: { type: String, required: true },
    phoneCode: { type: String, required: true },
}, {
    timestamps: true,
    collection: "address"
});

const address = mongoose.model("Address", addressSchema);
export default address