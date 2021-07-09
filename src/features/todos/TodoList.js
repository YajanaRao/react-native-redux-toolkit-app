import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export function TodoList() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      {todos.map((todo, index) => (
        <Text style={styles.todoText} key={todo.id}>{`${index + 1}. ${
          todo.text
        }`}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  todoText: {
    margin: 4,
  },
});
