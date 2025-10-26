

import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import TodoItem from "./TodoItem"; 

export default function Todos({
  todos,
  toggleComplete,
  filter,
  setFilter,
  styles,
}) {
  const renderItem = ({ item }) => (
    <TodoItem item={item} toggleComplete={toggleComplete} />
  );

  return (
    <>
      
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
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          ListEmptyComponent={
            <Text style={{ textAlign: "center", marginTop: 20 }}>
              No todos yet.
            </Text>
          }
        />
      </View>
    </>
  );
}
