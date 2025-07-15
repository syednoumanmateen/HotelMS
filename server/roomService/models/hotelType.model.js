import mongoose from 'mongoose';

const hotelTypeSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String }
});

const HotelType = mongoose.model('HotelType', hotelTypeSchema);
export default HotelType;
