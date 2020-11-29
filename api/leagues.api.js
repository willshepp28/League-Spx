const router = require("express").Router();
const model = require("../db/models");



// GET path to find a league
// Given a total budget, a radius, and a location, this service should return enough leagues to spend up to the budget, sponsoring as many leagues as possible without going over it
router.get("/", async(request, response) => {
    // let options = {
    //     budget: request.body.budget,
    //     radius: request.body.radius,
    //     latitude: request.body.latitude,
    //     longitude: request.body.longitude
    // };

    try {
        const leagues = await model.League.findAll({ attributes: ["name", "location"]});
        return response.status(200).json(leagues);
    } catch(error) {
        return response.status(400).json(error)
    }
});


// POST path to add league
router.post("/", async (request, response) => {

    const league = {
        name: request.body.name,
        email: request.body.email,
        location: {
            type: "Point",
            coordinates: [request.body.latitude, request.body.longitude]
        },
        price: request.body.price
    }

    try {
        league = await model.League.create(league);
        return response.status(200).json(league);
    } catch(error) {
        console.log(error);
        return response.status(400).json(error)
    }
  
});


router.get("/location", async(request ,response) => {

    try {
        let locations = await model.League.findAll({ attributes: ["location"]});
        return response.status(200).json(locations);
    } catch(error) {
        return response.status(400).json(error);
    }
})





module.exports = router;