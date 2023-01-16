import express from "express";
import WorkoutModel from "../models/workoutModel";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "GET all workouts" });
});

router.get("/:id", (req, res) => {
  res.json({ msg: "GET single workout" });
});

router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await WorkoutModel.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
