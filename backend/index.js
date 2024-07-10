const express = require("express");
const todoRouter = require("./routes/TodoRouter");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3002;

const app = express();

app.use(
  cors({
    // origin: "http://localhost:5173",
    origin: "https://todo-application-frontend-yctq.onrender.com",
  })
);
app.use(express.json());
app.use("/api", todoRouter);

app.listen(port, () => {
  console.log(`Server is listening on PORT ${port}`);
});
