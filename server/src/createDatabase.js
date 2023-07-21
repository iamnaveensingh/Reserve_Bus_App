const mongoose = require('mongoose')
const busDataModel = require('./models/busData')
const data = require('./data')
require('dotenv').config()

// Connect to DATABASE


const DATABASE_URL="mongodb+srv://naveensingh7604:naveensingh7604@cluster0.wq1gytd.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await busDataModel.deleteMany({})
    // console.log(connection)
    await busDataModel.insertMany(data)
    await mongoose.disconnect();
}
refreshAll()