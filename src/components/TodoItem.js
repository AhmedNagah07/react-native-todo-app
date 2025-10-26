

import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { toggleTodo, deleteTodo } from "../Redux/slices/todos.slices";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StyleSheet } from "react-native";
const TodoItem = ({ item }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleViewDetails = () => {
    
    navigation.navigate("TodoDetails", { todo: item });
  };
  const handleToggle = () => {
    dispatch(toggleTodo(item.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(item.id));
  };

  const textStyle = item.completed
    ? [styles.todoText, styles.completedText]
    : styles.todoText;

  return (
    <View style={styles.itemContainer}>
      
      <TouchableOpacity onPress={handleViewDetails} style={styles.textWrapper}>
        <Text style={textStyle}>{item.title}</Text>
      </TouchableOpacity>

     
      <View style={styles.buttonsContainer}>
        
        <TouchableOpacity onPress={handleToggle} style={styles.toggleButton}>
          <FontAwesome5
            name={item.completed ? "toggle-on" : "toggle-off"}
            size={24}
            color={item.completed ? "#4CAF50" : "#9e9898ff"}
          />
        </TouchableOpacity>

       
        <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
          <AntDesign name="delete" size={24} color="#D32F2F" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 2,
  },
  textWrapper: {
    flex: 1,
    paddingRight: 10,
  },
  todoText: {
    fontSize: 16,
    color: "#333",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#888",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10, 
  },
  toggleButton: {
    padding: 5,
  },
  deleteButton: {
    padding: 5,
  },
});

export default TodoItem;
