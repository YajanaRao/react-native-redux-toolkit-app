import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TodoList } from './TodoList';
import { AddTodo } from './AddTodo';

export const TodoApp = () => {

  return (
    <View style={styles.container}>
      <AddTodo/>
      <TodoList/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});
