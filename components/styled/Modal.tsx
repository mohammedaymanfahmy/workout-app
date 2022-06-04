import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal as ReactModal,
} from "react-native";
import { PressableText } from "./PressableText";
import { Children, FunctionComponent, useState } from "react";

// we will put here the new data types that we gona make
type ModalProps = {
  activator?: FunctionComponent<{ handleOpen: () => void }>;
  children: React.ReactNode;
};

export function Modal({ activator: Activator, children }: ModalProps) {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <ReactModal
        visible={isModalVisible}
        transparent={false}
        animationType="slide"
      >
        <View style={styles.centerdView}>
          <View style={styles.contentView}>{children}</View>

          <PressableText onPress={() => setModalVisible(false)} text="Close" />
        </View>
      </ReactModal>
      {Activator ? (
        <Activator handleOpen={() => setModalVisible(true)} />
      ) : (
        <PressableText onPress={() => setModalVisible(true)} text="Open" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  centerdView: {
    backgroundColor: "#E6F0F4",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentView: {
    marginBottom: 120,
  },
});
