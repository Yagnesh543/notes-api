const express = require("express");
const connectDb = require("./config/db");
const noteRoutes = require("./routes/notes");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());

app.use("/notes", noteRoutes);

connectDb();

app.listen(8080, () => {
    console.log("The server is running");
})