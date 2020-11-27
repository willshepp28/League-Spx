const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const PORT = process.env.PORT || 3000;
const leaguesAPI = require("./api/leagues.api");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.get("/", (request ,response) => {
    return response.status(200).json("Welcome to League-Spx");
});

app.use("/leagues", leaguesAPI);


app.listen(PORT, (request, response) => {
    console.log(`Server is listening on Port: ${PORT}`);
});