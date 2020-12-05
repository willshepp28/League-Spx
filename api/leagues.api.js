const router = require("express").Router();
const Sequelize = require("sequelize");
const model = require("../db/models");
const {addLeagueValidator, findLeagueValidator} = require("../helpers/validation/league.validation");
const leaguesInBudget = require("../helpers/budget.helper");



// GET path to find a league
// Given a total budget, a radius, and a location, this service should return enough leagues to spend up to the budget, sponsoring as many leagues as possible without going over it
router.get("/", findLeagueValidator, async(request, response) => {

    try {
        const getLeaguesByRadius = await model.League.findAll({ 
            where: Sequelize.where(
                Sequelize.fn('ST_DWithin',
                  Sequelize.col("location"),
                  Sequelize.fn('ST_SetSRID',
                    Sequelize.fn('ST_MakePoint',
                      request.body.longitude, request.body.latitude),
                    4326),
                  +request.body.radius * 0.016),
                true),
                from : {
                    $between: [0 , +request.body.budget]
                },
            attributes: ["id", "name", "price"],
            order: [["price", "ASC"]],
            raw: true
        });

        const leagues = await leaguesInBudget(getLeaguesByRadius, parseInt(request.body.budget));
        return response.status(200).json(leagues);
    } catch(error){ 
        console.log(error)
        return response.status(400).json(error);
    }
    
});


// POST path to add league
router.post("/", addLeagueValidator, async (request, response) => {
    
    const data = {
        name: request.body.name,
        email: request.body.email || null,
        location: {
            type: "Point",
            coordinates: [request.body.longitude, request.body.latitude]
        },
        price: request.body.price
    }

    try {
        league = await model.League.create(data);
        return response.status(201).json(league);
    } catch(error) {
        console.log(error);
        return response.status(400).json(error)
    }
  
});


router.get("/all", async(request, response) => {

    try {
        let leagues = await model.League.findAll();
        return response.status(200).json(leagues)
    } catch(error){
        console.log(error)
        return response.status(400).json(error)
    }
})






module.exports = router;