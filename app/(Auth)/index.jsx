import { View, Text, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";

export default function AuthScreen() {
  return (
    <Pressable
      onPress={() => {
        router.navigate("/Ia");
      }}
      style={styles.container}
    >
      <Text style={styles.title}>ENTRER</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
