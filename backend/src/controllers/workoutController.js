import { WorkoutModel } from "../models/workoutModel.js";
import mongoose from "mongoose";

// get all workouts
const getWorkouts = async (req, res) => {
  const workouts = await WorkoutModel.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

// get a single workout
const getSingleWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Workout does not exist" });
  }

  const workout = await WorkoutModel.findById(id);
  if (!workout) {
    return res.status(400).json({ error: "Workout does not exist" });
  }

  res.status(200).json(workout);
};

// create new workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  let emptyFields = [];

  if (!title) emptyFields.push("title");
  if (!reps) emptyFields.push("reps");
  if (!load) emptyFields.push("load");

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: `Please fill in all fields`, emptyFields });
  }

  console.log(emptyFields);

  // add doc to db
  try {
    const workout = await WorkoutModel.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Workout does not exist" });
  }

  const workout = await WorkoutModel.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(400).json({ error: "Workout does not exist" });
  }

  res.status(200).json(workout);
};

// update workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Workout does not exist" });
  }

  const workout = await WorkoutModel.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!workout) {
    return res.status(400).json({ error: "Workout does not exist" });
  }

  res.status(200).json(workout);
};

export {
  getWorkouts,
  getSingleWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
