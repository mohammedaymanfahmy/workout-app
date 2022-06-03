import { Pressable, PressableProps, Text } from "react-native";
export const PressableText = (props: PressableProps & { text: string }) => {
  return (
    <Pressable {...props}>
      <Text style={{ textDecorationLine: "underline" }}>{props.text}</Text>
    </Pressable>
  );
};
