const roomTypeSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    basePrice: { type: Number, required: true },
    amenities: [String]
});

const RoomType = mongoose.model('RoomType', roomTypeSchema);
module.exports = RoomType;
