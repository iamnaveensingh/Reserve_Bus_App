
import app from './src/app.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()
const port = process.env.Port || 5000


// Connect to DATABASE
const DATABASE_URL = process.env.MongoKey;
mongoose.connect(DATABASE_URL, { useNewUrlParser: true});
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))
