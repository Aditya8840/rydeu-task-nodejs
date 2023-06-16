/**
 * FareController Files has function related to calculate fare
 * getFare
 */

const axios = require("axios");
const Fare = require("../models/Fare");

/**
 * Calculating fare based on pickup-destination and vehicle.
 * @param {Object} req.body - The request body object containing pickup, destination and vehicle.
 * Verifying payload
 * Get distance between pickup and destination through API
 * Check if distance is greater than 1000 @returns {Object} the response of Too far to offer ride.
 * Calculating price and checking if distance is greater than 30 or city is flagged or price is less than 50 then @returns {Object} The response containing email is true if email is not provided.
 * @returns {Object} The response containing price.
 */
module.exports.getFare = async (req,res) => {
    const pickup = req.body.pickup;
    const destination = req.body.destination;
    const vehicle = req.body.vehicle
    let email = null;
    if(req.body.email){
        email = req.body.email;
    }

    if(!pickup || !destination || !vehicle){
        return res.status(200).json({"message": "Payload is wrong"});
    }


    const distanceData = await axios.post(
        'http://localhost:5555/api/getDistance',
        { 
            "pickup": pickup,
            "destination": destination 
        }
    );
    const distance = distanceData.data.distance;
    if(distance > 1000){
        return res.status(200).json({"message": "Too far to offer ride"})
    }

    const data = await Fare.findOne({ city: pickup });

    const pricingData = data.pricing.find(
        (pricing) => pricing.vehicleType === vehicle
    );

    const price = distance*(pricingData.amountPerKm);

    if(distance>30 || data.flag || price<50){
        if(!email){
            return res.json({"email": true});
        }
    }

    return res.status(200).json({"price": price});
}