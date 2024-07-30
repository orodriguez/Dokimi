import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Todo } from '../types';

interface Props {
    todos: Todo[];
    removeTodo: (id: number) => void;
}

const TodoList: React.FC<Props> = ({ todos, removeTodo }) => (
    <List>
        {todos.map(todo => (
            <ListItem key={todo.id}>
                <ListItemText primary={todo.text} />
                <IconButton edge="end" onClick={() => removeTodo(todo.id)}>
                    <DeleteIcon />
                </IconButton>
            </ListItem>
        ))}
    </List>
);

export default TodoList;
