const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const leaguesAPI = require("./api/leagues.api");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (request ,response) => {
    return response.status(200).json({ status: true})
});

app.use("/leagues", leaguesAPI);

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, (request, response) => {
        console.log(`Server is listening on Port: ${PORT}`);
    });
}

module.exports = app;