const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/connect");
const cors = require("cors");

const app = express();
dotenv.config();

// middleware
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// routes
// app.use("/", posts)

app.get("/", (req, res) => {
  res.send("Hello world");
});

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
