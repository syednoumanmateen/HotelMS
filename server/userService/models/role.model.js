import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
    name: {
        type: String, required: true, unique: true, enum: [
            "General Manager",
            "Front Office Manager",
            "Receptionist",
            "Concierge",
            "Housekeeping Manager",
            "Housekeeper",
            "Food and Beverage Manager",
            "Chef",
            "Sous Chef",
            "Waiter/Waitress",
            "Bartender",
            "Sales Manager",
            "Event Coordinator",
            "Maintenance Manager",
            "Security Officer",
            "Bellhop",
            "Valet Parking Attendant",
            "Spa Manager",
            "Guest Relations Manager",
            "guest"
        ]
    },
    roleId: { type: String, required: true, unique: true },
    requiresAttendance: { type: Boolean, required: true, default: true }
});

const role = mongoose.model("Role", roleSchema)
export default role