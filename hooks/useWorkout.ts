import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { getWorouts } from "../storage/workouts";
import { Workout } from "../types/data";

export const useWorkouts = () => {
  const [Workouts, setWorkouts] = useState<Workout[]>([]);
  const isFoucasd = useIsFocused();
  useEffect(() => {
    async function getData() {
      console.log("Gitting Data!");
      const _workouts = await getWorouts();
      setWorkouts(_workouts);
    }
    if (isFoucasd) {
      getData();
    }
  }, [isFoucasd]);

  return Workouts;
};
