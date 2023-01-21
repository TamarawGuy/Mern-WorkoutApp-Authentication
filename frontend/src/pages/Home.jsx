import { useEffect } from "react";

import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

import { useAuthContext } from "../hooks/useAuthContext";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };
    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, user]);

  return (
    <div className="home">
      <WorkoutForm />
      <div className="workouts">
        {workouts &&
          workouts.map((w) => <WorkoutDetails key={w._id} workout={w} />)}
      </div>
    </div>
  );
};

export default Home;
