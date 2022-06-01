import { useEffect } from "react";
import { View, Text, Button } from "react-native";

import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  //****NAVIGATION TEST****/
  // useEffect(() => {
  //   console.log("RENDER Home Screen");
  //   return () => console.log("HOME Screen is unMounted");
  // }, []);

  return (
    <View>
      <Text>Iam Home Screen</Text>
    </View>
  );
}
