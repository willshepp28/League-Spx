const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded());
app.use(morgan("dev"));

app.get("/", (request ,response) => {
    return response.status(200).json("Welcome to League-Spx");
});



app.listen(PORT, (request, response) => {
    console.log(`Server is listening on Port: ${PORT}`);
});