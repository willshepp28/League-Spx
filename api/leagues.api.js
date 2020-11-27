const router = require("express").Router();



// GET path to find a league
router.get("/", (request, response) => {
    return response.status(200).json([
        { name: "Little League", coordinates: [1000023, 103003], price: 200, total_players: 12},
        { name: "FA Youth Cup", coordinates: [20000303, 4044040], price: 300, total_players: 12},
    ])
});


// POST path to add league
router.post("/", (request, response) => {
    return response.status(200).json({
        message: "League created!!!"
    })
});





module.exports = router;