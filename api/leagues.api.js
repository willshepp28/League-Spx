const router = require("express").Router();



// GET path to find a league
router.get("/", (request, response) => {
    return response.status(200).json("Welcome to the leagues endpoint")
});


// POST path to add league
router.post("/path", (request, response) => {
    return response.status(200).json({
        message: "League created!!!"
    })
});





module.exports = router;