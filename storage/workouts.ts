import { containsKey, storeData, getData, removeItem } from "./index";
import data from "../data.json";
import { Workout } from "../types/data";

export const getWorouts = async (): Promise<Workout[]> => {
  const workouts = await getData("workout-data");
  return workouts;
};

export const getWoroutbySlug = async (slug: string): Promise<Workout> => {
  const workouts = await getWorouts();
  // any way it will be one result but to be more safe  we will return the first one
  const workout = workouts.filter((w) => w.slug === slug)[0];
  return workout;
};

export const initWorkouts = async (): Promise<boolean> => {
  const hasWorkouts = await containsKey("workout-data");
  if (hasWorkouts) {
    console.log("Storage data");
    await storeData("workout-data", data);
    return true;
  }
  return false;
};

export const clearWorkouts = async () => {
  await removeItem("workout-data");
};
