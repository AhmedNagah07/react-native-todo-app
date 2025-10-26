import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TodoDetails = ({ route }) => {
  const { todo } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{todo.title}</Text>
      <Text style={styles.description}> {todo.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#f17049ff",
    textAlign: "center",
    textTransform: "uppercase",
  },
  description: {
    fontSize: 20,
    marginBottom: 8,
    color: "gray",
    fontSize: 18,
    marginBottom: 8,
  },
});

export default TodoDetails;
