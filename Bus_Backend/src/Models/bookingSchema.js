import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const bookTicketSchema = new mongoose.Schema({

    busId: {
        type: ObjectId,
        ref: "BusDetails"
    },
    dateOfJourney: {
        type: Date,
        required: true,
    },
    seatsBooked: [
        {
            seatNumber:
            {
                type: String,
            },
        },
    ],
    routeId: {
        type: ObjectId,
        ref: "Routes"
    },
    userName: {
        type: String,
        required: true,
    },
    userMobile: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    userGender: {
        type: String,
        required: true,
    },
    userAge: {
        type: String,
        required: true,
    },
    totalPrice: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
    }
);

export default mongoose.model('bookedTicket', bookTicketSchema);