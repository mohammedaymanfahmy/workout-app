import { useEffect, useState } from "react";
import { getWoroutbySlug, getWorouts } from "../storage/workouts";
import { Workout } from "../types/data";

export const useWorkoutBySlug = (slug: string) => {
  const [Workout, setWorkout] = useState<Workout>();
  useEffect(() => {
    async function getData() {
      // console.log("Gitting Data!");
      const _workout = await getWoroutbySlug(slug);
      setWorkout(_workout);
    }

    getData();
  }, []);

  return Workout;
};
