

import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "../styles"; 

export default function TodoForm({
  title,
  description,
  setTitle,
  setDescription,
  addTodo,
}) {
  return (
    <View style={{width: "100%",flexDirection: "column", alignItems: "center"}}>
      <TextInput
        style={styles.input}
        onChangeText={setTitle}
        value={title}
        placeholder="Enter Todo Title"
      />
      <TextInput
        placeholder="Enter Todo Description"
        style={styles.input}
        onChangeText={setDescription}
        value={description}
      />
      <TouchableOpacity style={styles.submitBtn} onPress={addTodo}>
        <Text style={styles.text}>Submit Todo</Text>
      </TouchableOpacity>
    </View>
  );
}
