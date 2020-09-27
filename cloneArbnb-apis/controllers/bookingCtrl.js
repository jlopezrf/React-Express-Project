const { restart } = require('nodemon');
const bussinesLogicExperiences = require('./../bussinesLogic/bookingBL');

const booking = async (req, res) => {
    try {
        const response = await bussinesLogicExperiences.makeBooking(req.body);
        res.status(response.status).send(response.msg);    
    } catch (error) {
        res.status(500).send(error);
    }
    
}

module.exports = {
    booking
};