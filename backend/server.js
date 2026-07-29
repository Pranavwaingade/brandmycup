const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();


// Connect Database
connectDB();


// Middlewares
app.use(cors());

app.use(express.json());


// Test Route
app.get("/", (req, res) => {

    res.send(
        "CupsCraft Backend Server is Running 🚀"
    );

});

// Server
const PORT = process.env.PORT || 5000;

const authRoutes = require("./routes/authRoutes");

app.use(
    "/api/auth",
    authRoutes
);

app.use("/api/auth", authRoutes);

const userRoutes = require("./routes/userRoutes");

app.use(
    "/api/users",
    userRoutes
);

app.listen(PORT, () => {
    console.log(
        `Server running on port ${PORT} 🚀`
    );
});
