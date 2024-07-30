import React from 'react';
import { ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Todo } from '../types';

interface Props {
    todo: Todo;
    removeTodo: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, removeTodo }) => (
    <ListItem>
        <ListItemText primary={todo.text} />
        <IconButton edge="end" onClick={() => removeTodo(todo.id)}>
            <DeleteIcon />
        </IconButton>
    </ListItem>
);

export default TodoItem;
