import { ReactNode } from "react";
import { Text, View, StyleSheet, StyleProp, ViewStyle } from "react-native";

import { Workout } from "../types/data";
import { formatSec, secToMin } from "../utils/time";

export const WoroutItem = ({
  item,
  children,
  childStyles,
}: {
  item: Workout;
  children?: ReactNode;
  childStyles?: StyleProp<ViewStyle>;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.duration}>Duration: {formatSec(item.duration)}</Text>
      <Text style={styles.dificulty}>Dificulty: {item.difficulty}</Text>
      {children && <View style={childStyles}>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: "#855CAD",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#F0EBF5",
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#47246B",
  },
  duration: { fontSize: 15 },
  dificulty: { fontSize: 15 },
});
