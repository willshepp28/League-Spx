const router = require("express").Router();
const model = require("../db/models");
const {addLeagueValidator, findLeagueValidator} = require("../helpers/validation/league.validation");
const { getLeaguesByRadius, findLeagueByName, getLeaguesByRadiusRaw } = require("../services/league/league.service");
const leaguesInBudget = require("../helpers/budget.helper");



// GET path to find a league
// Given a total budget, a radius, and a location, this service should return enough leagues to spend up to the budget, sponsoring as many leagues as possible without going over it
router.get("/", findLeagueValidator, async(request, response) => {

    try {
    
        const getLeagues = await getLeaguesByRadiusRaw(request);
        const leagues = await leaguesInBudget(getLeagues, parseInt(request.body.budget));
        return response.status(200).json(leagues);
    } catch(error){ 
        console.log(error)
        return response.status(400).json(error);
    }
    
});


// POST path to add league
router.post("/", addLeagueValidator, async (request, response) => {

    try {
        league = await model.League.create({
            name: request.body.name,
            email: request.body.email || null,
            location: {
                type: "Point",
                coordinates: [request.body.longitude, request.body.latitude]
            },
            price: request.body.price
        });
        return response.status(201).json(league);
    } catch(error) {
        console.log(error);
        return response.status(400).json(error)
    }
  
});




// GET find league by name
router.get("/name", async(request, response) => {
    try {
        const league = await findLeagueByName(request.query.name);
        return response.status(200).json(league);
    } catch(error){ 
        console.log(error);
        return response.status(400).json(error);
    }
})








module.exports = router;