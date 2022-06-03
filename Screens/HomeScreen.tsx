// import { useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { WoroutItem } from "../components/workoutItem";
import { useWorkouts } from "./../hooks/useWorkout";

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  const workouts = useWorkouts();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Workouts</Text>
      {/* <MontserratText style={{ fontSize: 20 }}>My Workouts</MontserratText> */}
      <FlatList
        data={workouts}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate("WorkoutDetailScreen", { slug: item.slug })
              }
            >
              <WoroutItem item={item} />
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.slug}
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
