import express from "express";
import {
  getWorkouts,
  getSingleWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} from "../controllers/workoutController.js";

const workoutRouter = express.Router();

workoutRouter.get("/", getWorkouts);

workoutRouter.get("/:id", getSingleWorkout);

workoutRouter.post("/", createWorkout);

workoutRouter.patch("/:id", updateWorkout);

workoutRouter.delete("/:id", deleteWorkout);

export default workoutRouter;
