// import { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import data from "../data.json";
import { Workout } from "./../types/data";
import { WoroutItem } from "../components/workoutItem";
import { MontserratText } from "../components/MontserratText";

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Workouts</Text>
      <MontserratText style={{ fontSize: 40 }}>My Workouts</MontserratText>
      <FlatList
        data={data as Array<Workout>}
        renderItem={WoroutItem}
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
