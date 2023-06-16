




module.exports.getDistance = (req, res) => {
    const pickup = req.body.pickup;
    const destination = req.body.destination;

    switch (pickup) {
        case "Paris":
            if (destination == "London")
                return res.json({"distance": 1100});
            else if (destination == "Berlin")
                return res.json({"distance": 1050});
            else if (destination == "Barcelona")
                return res.json({"distance": 1030});
            else
                return res.json({"distance": 507});
            break;
        case "London":
            if (destination == "Paris")
                return res.json({"distance": 1100});
            else if (destination == "Berlin")
                return res.json({"distance": 688});
            else if (destination == "Barcelona")
                return res.json({"distance": 932});
            else
                return res.json({"distance": 340});
            break;
        case "Berlin":
            if (destination == "London")
                return res.json({"distance": 688});
            else if (destination == "Paris")
                return res.json({"distance": 1050});
            else if (destination == "Barcelona")
                return res.json({"distance": 1863});
            else
                return res.json({"distance": 507});
            break;
        case "Barcelona":
            if (destination == "London")
                return res.json({"distance": 590});
            else if (destination == "Berlin")
                return res.json({"distance": 348});
            else if (destination == "Barcelona")
                return res.json({"distance": 590});
            else
                return res.json({"distance": 1000});
            break;
        case "Amsterdam":
            if (destination == "London")
                return res.json({"distance": 1100});
            else if (destination == "Berlin")
                return res.json({"distance": 1050});
            else if (destination == "Barcelona")
                return res.json({"distance": 1030});
            else
                return res.json({"distance": 507});
            break;
        default : return res.json({"distance": 0});;
            break;
    }
}