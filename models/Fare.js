const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");

const fareSchema = new mongoose.Schema(
    {
        country: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        flag: {
            type: Boolean,
            default: false
        },
        pricing: [
            {
                vehicleType: {
                    type: String,
                    required: true
                },
                amountAirportFees: {
                    type: Number,
                    required: true
                },
                amountPerHour: {
                    type: Number,
                    required: true
                },
                amountPerKm: {
                    type: Number,
                    required: true
                },
                baseAmount:{
                    type: Number,
                    required: true
                },
                baseKm: {
                    type: Number,
                    required: true
                }
            }
        ]
    },
    {
        timestamps: true
    }
);


module.exports = mongoose.model("Fare", fareSchema);