import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const bus_ownerSchema = new mongoose.Schema({
    busNumber: { type: String, required: true },
    routes: [
        {
            Departuretime: {
                type: String,
            },
            Reachingtime: {
                type: String,
            },
            routeId: {
                type: ObjectId,
                ref: "TripsRoute"
            },
        },
    ],
    type:
    {
        type: String,
        required: true
    },
    fare:
    {
        type: Number,
        required: true
    },
    seats: [
        {
            seatNumber:
            {
                type: String,
                required: true
            },
            isAvailable:
            {
                type: Boolean,
                required: true, default: true
            },
        },
    ],
    busName:
    {
        type: String,
        required: true
    },
});

export default mongoose.model('BusDetails', bus_ownerSchema);