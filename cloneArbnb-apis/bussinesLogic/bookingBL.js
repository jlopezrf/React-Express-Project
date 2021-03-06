const BookingModel = require('./../models/bookingModel');

const makeBooking = async (body) => {
    bookingModel = new BookingModel({
        name: body.name,
        email: body.email,
        phone: body.phone,
        booking_date: body.bookingDate,
        experience_id: body.id
    });

    try {
        const response = await bookingModel.save((err) => {
            if(err) throw err;
        });
        return {status: '200', msg: 'Booking succes'};
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {makeBooking};