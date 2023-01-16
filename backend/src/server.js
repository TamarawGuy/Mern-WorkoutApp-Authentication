import express from "express";
import mongoose, { mongo } from "mongoose";
import * as dotenv from "dotenv";

import router from "./routes/workouts.js";

dotenv.config();
// express app
const app = express();

// middleware
app.use(express.json());

// routes
app.use((req, res, next) => {
  console.log(req.path, req.method);

  next();
});

app.use("/api/workouts", router);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () =>
      console.log("Connected to db and listening on port, ", process.env.PORT)
    );
  })
  .catch((error) => console.log(error));
