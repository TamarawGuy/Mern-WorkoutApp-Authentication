import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);

  next();
});

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to app" });
});

app.listen(process.env.PORT, () =>
  console.log("Listening on port, ", process.env.PORT)
);
