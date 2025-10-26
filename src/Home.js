import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  toggleTodo,
  setInitialTodos,
} from "./Redux/slices/todos.slices";
import { SafeAreaView } from "react-native-safe-area-context";

const STORAGE_KEY = "@todo_list_key";

const saveTodos = async (newTodos) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newTodos));
    console.log("Saved todos to AsyncStorage. Count:", newTodos.length);
  } catch (e) {
    console.error("Failed to save todos:", e);
  }
};

const loadTodos = async () => {
  try {
    const savedTodos = await AsyncStorage.getItem(STORAGE_KEY);
    return savedTodos ? JSON.parse(savedTodos) : [];
  } catch (e) {
    console.error("Failed to load todos:", e);
    return [];
  }
};

const Home = () => {
  

  const dispatch = useDispatch();
  const { allTodos } = useSelector((state) => state.todos);

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [filter, setFilter] = React.useState("All");

  useEffect(() => {
    const getSavedTodos = async () => {
      const savedTodos = await loadTodos();

      dispatch(setInitialTodos(savedTodos));
    };
    getSavedTodos();
  }, []);

  useEffect(() => {
    saveTodos(allTodos);
  }, [allTodos]);

  const handleSetTitle = (newTitle) => setTitle(newTitle);
  const handleSetDescription = (newDescription) =>
    setDescription(newDescription);

  const handleAddTodo = () => {
    if (title.trim() === "" || description.trim() === "") return;
    const newTodo = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
    setDescription("");
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleTodo(id));
  };

  const filteredTodos = allTodos.filter((todo) => {
    if (filter === "All") return true;
    if (filter === "Completed") return todo.completed;
    if (filter === "Active") return !todo.completed;
  });

  return (
    
      <View style={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 10 }}>
          Todo App
        </Text>
        <StatusBar style="auto" />

        <TodoForm
          title={title}
          description={description}
          setTitle={handleSetTitle}
          setDescription={handleSetDescription}
          addTodo={handleAddTodo}
        />

        <Text style={styles.dividerLine}>
          <View style={styles.divider} />
        </Text>

        <Todos
          todos={filteredTodos}
          toggleComplete={handleToggleComplete}
          filter={filter}
          setFilter={setFilter}
          styles={styles}
        />
      </View>
    
  );
};

export default Home;
