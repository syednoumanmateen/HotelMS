const hotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },

    hotelType: { type: mongoose.Schema.Types.ObjectId, ref: 'HotelType', required: true },

    rating: { type: Number, min: 1, max: 5 },
    facilities: [String]
});

const Hotel = mongoose.model('Hotel', hotelSchema);
module.exports = Hotel;
