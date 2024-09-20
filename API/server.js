const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); //ให้ font เชื่อมต่อ back ได้
app.use(fileUpload());
app.use("/uploads", express.static("./uploads"));

const UserController = require("./controllers/UserController");
const FoodTypeController = require("./controllers/FoodTypeController");
const FoodSizeController = require("./controllers/FoodSizeController");
const TasteController = require("./controllers/TasteController");
const Food = require("./controllers/FoodController");
const FoodController = require("./controllers/FoodController");
const saleTempController = require("./controllers/SaleTempController");

app.post("/api/user/signIn", (req, res) => UserController.signIn(req, res));

app.post("/api/foodType/create", (req, res) => FoodTypeController.create(req, res));
app.get("/api/foodType/list", (req, res) => FoodTypeController.list(req, res));
app.delete("/api/foodType/remove/:id", (req, res) => FoodTypeController.remove(req, res));
app.put("/api/foodType/update", (req, res) => FoodTypeController.update(req, res));

app.post("/api/foodSize/create", (req, res) => FoodSizeController.create(req, res));
app.get("/api/foodSize/list", (req, res) => FoodSizeController.list(req, res));
app.delete("/api/foodSize/remove/:id", (req, res) => FoodSizeController.remove(req, res));
app.put("/api/foodSize/update", (req, res) => FoodSizeController.update(req, res));
app.get("/api/foodSize/filter/:foodTypeId", (req, res) => FoodSizeController.filter(req, res));

app.post("/api/taste/create", (req, res) => TasteController.create(req, res));
app.get("/api/taste/list", (req, res) => TasteController.list(req, res));
app.delete("/api/taste/remove/:id", (req, res) => TasteController.remove(req, res));
app.put("/api/taste/update", (req, res) => TasteController.update(req, res));

app.post("/api/food/create", (req, res) => FoodController.create(req, res));
app.get("/api/food/list", (req, res) => FoodController.list(req, res));
app.delete("/api/food/remove/:id", (req, res) => FoodController.remove(req, res));
app.put("/api/food/update", (req, res) => FoodController.update(req, res));
app.post("/api/food/upload", (req, res) => FoodController.upload(req, res));
app.get("/api/food/filter/:foodType", (req, res) => FoodController.filter(req, res));

app.post("/api/saleTemp/create", (req, res) => saleTempController.create(req, res));
app.get("/api/saleTemp/list/:userId", (req, res) => saleTempController.list(req, res));
app.delete("/api/saleTemp/clear/:userId", (req, res) => saleTempController.clear(req, res));
app.delete("/api/saleTemp/delete/:foodId/:userId", (req, res) => saleTempController.delete(req, res));
app.put("/api/saleTemp/changeQty", (req, res) => saleTempController.changeQty(req, res));




app.listen(3000, () => {
    console.log("API Server Running -> http://localhost:3000");
});