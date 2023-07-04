require("dotenv").config();
require("express-async-errors");

const cors = require("cors");

const express = require("express");
const app = express();

const connectDB = require("./db/connect");

// routers
const posts = require("./routes/postRoute");

// error handler
const notFoundMiddleware = require("./middlewares/notFound");
const errorHandlerMiddleware = require("./middlewares/errorHandler");

// middleware
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// routes
app.use("/api/v1/posts", posts);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

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
