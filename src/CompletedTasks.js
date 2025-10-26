import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./components/TodoItem";

const CompletedTasks = () => {
  const { allTodos } = useSelector((state) => state.todos);

  const completedTodos = allTodos.filter((todo) => todo.completed === true);

  const renderItem = ({ item }) => <TodoItem item={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={completedTodos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No completed tasks yet.</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",

    marginBottom: 15,
  },
  listContent: {
    paddingBottom: 20,
  },
  emptyContainer: {
    padding: 20,
    alignItems: "center",
    marginTop: 50,
  },
  emptyText: {
    fontSize: 18,
    color: "#777",
    textAlign: "center",
  },
});

export default CompletedTasks;
