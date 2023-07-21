const mongoose = require('mongoose');

// Schema for validation of data before inserting the data into MongoDB Database
const busDataSchema = new mongoose.Schema({
    BusName: {
        type: String,
        required: true,
    },
    Rating:{
        type: String,
        required: true,
    },
    From: {
        type: String,
        required: true,
    },
    To: {
        type: String,
        required: true,
    },
    FromTime: {
        type: String,
        required: true,
    },
    ToTime: {
        type: String,
        required: true,
    },
    DaysRunOn: {
        type: Array,
        required: true,
    },
    TimeInterval: {
        type: String,
        required: true,
    },
    seatsUpper: {
        type: Object,
        required: true,
    },
    seatsLower: {
        type: Object,
        required: true,
    },
})

module.exports = mongoose.model('BusData',busDataSchema);