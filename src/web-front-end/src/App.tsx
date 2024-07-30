import React, { useState } from 'react';
import { Container, Typography, Paper, Button } from '@mui/material';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { Todo } from './types';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
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
