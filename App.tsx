import { StatusBar } from "expo-status-bar";
import React from "react";
// import { View } from "react-native";
import Navigation from "./navigation";
//Components
// import HomeScreen from "./Screens/HomeScreen";
// import PlannerScreen from "./Screens/PlannerScreen";
import { useCachedResources } from "./hooks/useCachedResources";

export default function App() {
  const isLoaded = useCachedResources();
  if (isLoaded) {
    return (
      <>
        <Navigation />
        <StatusBar style="auto" />
      </>
    );
  } else {
    return null;
  }
}
