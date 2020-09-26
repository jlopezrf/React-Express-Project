const bussinesLogicExperiences = require('./../bussinesLogic/bookingBL');

const booking = (req, res) => {
    const {name} = req.body;
    res.send(bussinesLogicExperiences.makeBooking(name));
}

module.exports = {
    booking
};