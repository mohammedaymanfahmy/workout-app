// import { useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import Navigation from "./../navigation/index";
import { useWorkoutBySlug } from "./../hooks/useWorkoutBySlug";
import { PressableText } from "../components/styled/PressableText";

type DetailsNavigation = {
  route: {
    params: {
      slug: string;
    };
  };
};
type Navigation = NativeStackHeaderProps & DetailsNavigation;
export default function WorkoutDetailScreen({ route }: Navigation) {
  const workout = useWorkoutBySlug(route.params.slug);

  // check if workout = null value using normal way

  // if (!workout)
  // {
  //   return null;
  // }
  return (
    <View style={styles.container}>
      {/*check if workout = null value using safe operator way */}
      <Text style={styles.header}>{workout?.name}</Text>
      <PressableText
        onPress={() => alert("OPENING MODEL")}
        text="Check Sequance"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#E6F0F4",
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    // fontWeight: "bold",
    fontFamily: "montserrat-bold",
  },
});
