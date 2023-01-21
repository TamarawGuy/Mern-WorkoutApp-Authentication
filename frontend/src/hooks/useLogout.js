import { useAuthContext } from "./useAuthContext";
import { useWorkoutsContext } from "./useWorkoutsContext";

export const useLogout = () => {
  const { dispatch: authDispatch } = useAuthContext();
  const { dispatch: workoutDispatch } = useWorkoutsContext();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // dispatch logout action
    authDispatch({ type: "LOGOUT" });

    // set workouts global state back to null
    workoutDispatch({ type: "SET_WORKOUTS", payload: null });
  };

  return { logout };
};
