const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); //ให้ font เชื่อมต่อ back ได้

const UserController = require("./controllers/UserController");
const FoodTypeController = require("./controllers/FoodTypeController");

app.post("/api/user/signIn", (req, res) => UserController.signIn(req, res));
app.post("/api/foodType/create", (req, res) => FoodTypeController.create(req, res));
app.get("/api/foodType/list", (req, res) => FoodTypeController.list(req, res));

app.listen(3000, () => {
    console.log("API Server Running -> http://localhost:3000");
});