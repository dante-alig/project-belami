import React from "react";
import { Tabs } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function Layout() {
  return (
    <View style={styles.container}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#141414", // Couleur de fond
            height: 70, // Change la hauteur du menu tabs
            borderRadius: 20, // Applique un border-radius
            marginBottom: 40, // Ajoute un espacement en bas pour mieux voir le border-radius
            paddingBottom: 10, // Ajuste l'intérieur de la barre pour les icônes
            paddingTop: 10, // Ajuste l'intérieur de la barre pour les icônes
          },
          tabBarActiveTintColor: "black", // Couleur du texte actif
          tabBarInactiveTintColor: "gray", // Couleur du texte inactif
        }}
      >
        <Tabs.Screen name="Expert" />
        <Tabs.Screen name="Ia" />
        <Tabs.Screen name="Profil" />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
