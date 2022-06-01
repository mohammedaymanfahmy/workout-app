import { StatusBar } from "expo-status-bar";
import React from "react";
// import { View } from "react-native";
import Navigation from "./navigation";
//Components
// import HomeScreen from "./Screens/HomeScreen";
// import PlannerScreen from "./Screens/PlannerScreen";

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
  );
}
