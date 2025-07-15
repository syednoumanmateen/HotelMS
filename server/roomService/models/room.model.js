import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
    roomNumber: { type: String, required: true },
    floor: { type: String },

    hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: true },
    roomType: { type: mongoose.Schema.Types.ObjectId, ref: 'RoomType', required: true },

    isAvailable: { type: Boolean, default: true },
    currentGuest: { type: mongoose.Schema.Types.ObjectId, ref: 'Guest' },
    roomstatus: { type: String, required: true, default: "Available", enum: ["Dirty", "Cleaning", "Available", "Occupied"] },
    pricePerNight: { type: Number },
});

roomSchema.index({ roomNumber: 1, hotel: 1 }, { unique: true });

const Room = mongoose.model('Room', roomSchema);
export default Room;
