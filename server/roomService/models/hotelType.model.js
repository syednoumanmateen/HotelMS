const mongoose = require('mongoose');

const hotelTypeSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String }
});

const HotelType = mongoose.model('HotelType', hotelTypeSchema);
module.exports = HotelType;
