// src/App.tsx
import React, { useState } from 'react';
import { Container, Typography, Paper } from '@mui/material';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { Todo } from './types';
import axios from 'axios';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = async (text: string) => {
    try {
      // Make a POST request to your backend API
      const response = await axios.post('https://your-backend-api.com/todos', { text });

      // Assuming the response contains the new todo object
      const newTodo: Todo = response.data;

      setTodos([...todos, newTodo]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const removeTodo = async (id: number) => {
    try {
      // Make a DELETE request to your backend API
      await axios.delete(`https://your-backend-api.com/todos/${id}`);

      // Remove the todo from the state
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error removing todo:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        ToDo App
      </Typography>
      <Paper style={{ padding: 16 }}>
        <TodoInput addTodo={addTodo} />
        <TodoList todos={todos} removeTodo={removeTodo} />
      </Paper>
    </Container>
  );
};

export default App;
