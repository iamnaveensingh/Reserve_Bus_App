const mongoose = require('mongoose');

// Schema for validation of data before inserting the data into MongoDB Database
const addUserDetailsSchema = new mongoose.Schema({
    BusID: {
        type: String,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    Gender:{
        type: String,
        required: true,
    },
    Age: {
        type: Number,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    MobileNo: {
        type: String,
        required: true,
    },
    FromDate: {
        type: Date,
        required: true,
    },
    Seats: {
        type: Array,
        required: true,
    },
    Price: {
        type: Number,
        required: true,
    },
})

module.exports = mongoose.model('AddUserDetail',addUserDetailsSchema);