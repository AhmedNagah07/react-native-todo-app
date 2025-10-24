import { StatusBar } from "expo-status-bar";
import styles  from "./styles";
import {
  
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { SafeAreaView, ScrollView } from "react-native-web";
import React from "react";

export default function App() {
  const [todos, setTodos] = React.useState([]);
  const [title, onChangeTitle] = React.useState("");
  const [description, onChangeDescription] = React.useState("");
  const [filter, setFilter] = React.useState("All");

  // const navigation = useNavigation();
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") return true;
    if (filter === "Completed") return todo.completed;
    if (filter === "Active") return !todo.completed;
  });

  const setTitle = (newTitle) => {
    onChangeTitle(newTitle);
    console.log(newTitle);
  };

  const setDescription = (newDescription) => {
    onChangeDescription(newDescription);
    console.log(newDescription);
  };

  const addTodo = () => {
    if (title.trim() === "" || description.trim() === "") return;
    const newTodo = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setTitle("");
    setDescription("");
    console.log(todos);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => toggleComplete(item.id)}
      style={[
        {
          width: "90%",
          marginVertical: 8,
          padding: 12,
          borderRadius: 10,
          backgroundColor: item.completed ? "#e8f8ec" : "#ffffff",
          alignSelf: "center",
          borderWidth: 1,
          borderColor: "#ddd",
          boxShadow: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 2,
        },
      ]}
    >
      <Text
        style={[
          {
            fontSize: 18,
            fontWeight: "500",
            textDecorationLine: item.completed ? "line-through" : "none",
          },
        ]}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Todo app</Text>
      <StatusBar style="auto" />
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
        <Text style={styles.text}>submit todo</Text>
      </TouchableOpacity>

      <Text style={styles.dividerLine}>
        <View style={styles.divider} />
      </Text>

      <View style={styles.filterContainer}>
        {["All", "Active", "Completed"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.filterBtn, filter === tab && styles.activeFilterBtn]}
            onPress={() => setFilter(tab)}
          >
            <Text
              style={[
                styles.filterText,
                filter === tab && styles.activeFilterText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.todosContainer}>
        <FlatList
          data={filteredTodos}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          ListEmptyComponent={<Text>No todos yet. Add one!</Text>}
        />
      </View>
    </View>
  );
}


