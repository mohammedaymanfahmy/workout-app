import { View, Text, StyleSheet } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import Navigation from "./../navigation/index";
import { useWorkoutBySlug } from "./../hooks/useWorkoutBySlug";
import { PressableText } from "../components/styled/PressableText";
import { Modal } from "../components/styled/Modal";
import { formatSec } from "../utils/time";
import { FontAwesome } from "@expo/vector-icons";
import { WoroutItem } from "../components/workoutItem";

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

  if (!workout) {
    return null;
  }

  return (
    <View style={styles.container}>
      <WoroutItem
        item={workout}
        childStyles={{ marginTop: 24, paddingLeft: "32%" }}
      >
        <Modal
          activator={({ handleOpen }) => (
            <PressableText onPress={handleOpen} text="Check Sequance" />
          )}
        >
          <View>
            {workout?.sequence.map((si, idx) => (
              <View style={styles.sequanceStyle} key={si.slug}>
                <Text>
                  {si.name} | {si.type} | {formatSec(si.duration)}
                </Text>

                {
                  // I Used && To return the first falsy value if the first condition false it will back with it
                  idx !== workout.sequence.length - 1 && (
                    <FontAwesome name="arrow-down" size={20} />
                  )
                }
              </View>
            ))}
          </View>
        </Modal>
      </WoroutItem>
      {/* <Text style={styles.header}>{workout?.name}</Text> */}
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
  centerdView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sequanceStyle: {
    alignItems: "center",
    marginBottom: 12,
  },
});
