import { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function PlannerScreen({ navigation }: NativeStackHeaderProps) {
  useEffect(() => {
    console.log("RENDER planner Screen");

    return () => console.log("Planner Screen is unMounted");
  }, []);
  return (
    <View>
      <Text>Iam Planner Screensss ty</Text>
      <Button title="GOTO Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
