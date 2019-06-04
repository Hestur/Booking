const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const BookingRoutes = express.Router();
const PORT = 5050;

var Booking = require('./booking.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/Booking', {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function(){
    console.log('MongoDB database connection established :)');
})

BookingRoutes.route('/').get(function(req, res) {
    Booking.find(function(err, j) {
        if (err){
            console.log("fejl", err);
        } else {
            res.json(j);
            // res.json("Hej")
        }
    });
});

BookingRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id
    Booking.findById(id, function(err, Booking){
        res.json(Booking);
    });
});


BookingRoutes.route('/add').post(function(req, res){
    let booking = new Booking(req.body);
    booking.save()
    .then(Booking => {
        res.status(200).json({'Booking': 'Booking added successfully'});
    })
    .catch(err => {
        res.status(400).send('adding new Booking failed!');
    });
}); 

BookingRoutes.route('/update/:id').put(function(req, res) {
    Booking.findById(req.params.id, function(err, Booking){
        if (!Booking)
        res.status(404).send('Data is not found');
        else 
        Booking.booking_Heading = req.body.booking_Heading;
        Booking.booking_Content = req.body.booking_Content;
        Booking.booking_Date = req.body.booking_Date;
        Booking.booking_completed = req.body.booking_completed;

        Booking.save().then(Booking => {
            res.json('Booking updated');
        })
        .catch(err => {
            res.status(400).send("Update not possible");
        });
    })
})

BookingRoutes.route("/delete/:id").delete(function(req, res) {

    Booking.deleteOne({_id: req.params.id}, function(err, result){
        if (err) {
            res.json("Der er sket en fejl: " + err)
        } else if (result.deletedCount <= 0) {
            res.json("Der blev ikke slettet nogen Booking");
        } else {
            res.json("Antal slettet Bookings: " + result.deletedCount);
        }
    }).catch(function(){
        console.log("noget gik galt, evt med forbindelsen til DB")
    });

});

app.use('/Booking', BookingRoutes);

app.listen(PORT, function() {
    console.log("server is running on port: " + PORT);
});