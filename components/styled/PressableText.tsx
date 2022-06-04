import { Pressable, PressableProps, Text } from "react-native";
export const PressableText = (props: PressableProps & { text: string }) => {
  return (
    <Pressable {...props}>
      <Text
        style={{
          textDecorationLine: "underline",
          fontSize: 15,
          fontWeight: "bold",
          marginBottom: 5,
          color: "#47246B",
        }}
      >
        {props.text}
      </Text>
    </Pressable>
  );
};
