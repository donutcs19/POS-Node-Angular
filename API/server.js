const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); //ให้ font เชื่อมต่อ back ได้

const UserController = require("./controllers/UserController");
const FoodTypeController = require("./controllers/FoodTypeController");
const FoodSizeController = require("./controllers/FoodSizeController");
const TasteController = require("./controllers/TasteController");

app.post("/api/user/signIn", (req, res) => UserController.signIn(req, res));

app.post("/api/foodType/create", (req, res) => FoodTypeController.create(req, res));
app.get("/api/foodType/list", (req, res) => FoodTypeController.list(req, res));
app.delete("/api/foodType/remove/:id", (req, res) => FoodTypeController.remove(req, res));
app.put("/api/foodType/update", (req, res) => FoodTypeController.update(req, res));

app.post("/api/foodSize/create", (req, res) => FoodSizeController.create(req, res));
app.get("/api/foodSize/list", (req, res) => FoodSizeController.list(req, res));
app.delete("/api/foodSize/remove/:id", (req, res) => FoodSizeController.remove(req, res));
app.put("/api/foodSize/update", (req, res) => FoodSizeController.update(req, res));

app.post("/api/taste/create", (req, res) => TasteController.create(req, res));
app.get("/api/taste/list" , (req, res) => TasteController.list(req, res));
app.delete("/api/taste/remove/:id", (req, res) => TasteController.remove(req, res));
app.put("/api/taste/update", (req, res) => TasteController.update(req, res));



app.listen(3000, () => {
    console.log("API Server Running -> http://localhost:3000");
});