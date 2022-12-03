const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect('**your_mongo_url**');
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDb connected");
});
const Port = process.env.PORT || 5000;

app.use(express.json());
const userRoute = require("./routes/user");
app.use("/user", userRoute);
app.route("/").get((req,res) => res.json("That works."));

app.listen(Port, () => console.log('your server is running on port ${Port}'));

