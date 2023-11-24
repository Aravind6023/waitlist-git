const express = require("express");
const connectDb = require("./config/dbConnection");
const cors = require("cors");
const bodyparser = require("body-parser");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const userRoute = require("./routes/userRoutes");
const adminRoute = require("./routes/adminRoutes");

connectDb();
const app = express();
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.use("/v1/user", userRoute);
app.use("/v1/admin", adminRoute);

app.listen(port, () =>{
    console.log(`Server is running on the ${port} port`)
})
