import express from "express";
import {
  getWorkouts,
  getSingleWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} from "../controllers/workoutController.js";
import { requireAuth } from "../middleware/requireAuth.js";

const workoutRouter = express.Router();
workoutRouter.use(requireAuth);

workoutRouter.get("/", getWorkouts);

workoutRouter.get("/:id", getSingleWorkout);

workoutRouter.post("/", createWorkout);

workoutRouter.patch("/:id", updateWorkout);

workoutRouter.delete("/:id", deleteWorkout);

export default workoutRouter;
