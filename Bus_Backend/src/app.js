import express from "express";
import trips from './Models/tripsSchema.js'
import bookingSchema from "./Models/bookingSchema.js";
import busSchema from "./Models/busSchema.js";
import { busRoutes } from '../data/data2.js'
import cors from 'cors';


const app = express()
app.use(cors())
app.use(express.json())

app.post('/getDetails', async (req, res) => {
  try {
    const { to, from, date } = req.body;
    const cities = await trips.find({
      source: to,
      destination: from,
    }).populate("buses");
    if (!cities || cities.length === 0) {
      const error = new Error("could not find the selected routes");
      throw error;
    }
    res.status(200).json(cities);
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ message: "could not find the selected routes", error: true });
  }
});

app.post("/bookTicket", async (req, res) => {
  const {
    userName,
    userMobile,
    userEmail,
    userGender,
    userAge,
    busId,
    selectedSeats,
    totalPrice,
    dateOfJourney,
    routeId,
  } = req.body;


  const booking = await bookingSchema.create({
    userName,
    userMobile,
    userEmail,
    userGender,
    userAge,
    busId,
    seatsBooked: selectedSeats,
    totalPrice,
    dateOfJourney,
    routeId,
  });
  res.json(booking);
});

app.post("/getSeats", async (req, res) => {
  const { routeId, date, busId } = req.body;
  const booking = await bookingSchema.find({
    busId: busId,
    routeId: routeId,
    dateOfJourney: date,
  });
  let mappedArr;
  if (booking.length > 0) {
    mappedArr = booking.map((el, i) => el.seatsBooked).flat();
  } else {
    mappedArr = booking;
  }
  res.status(200).json(mappedArr);
});

app.get("/bus-display/:id", async (req, res) => {
  let { id } = req.params;
  const cities = await trips.findById(id).populate("buses");
  res.json(cities);
});


app.get("/getRoutes", async (req, res) => {
  const routes = await trips.find();
  const mappedArr = routes.map((el, i) => {
    return {
      source: el.source,
      destination: el.destination,
      startingTime: el.departureTime,
      reachingTime: el.arrivalTime,
    };
  });
  res.json(mappedArr);

});

export default app;