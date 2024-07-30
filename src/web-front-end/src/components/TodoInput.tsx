// src/components/TodoInput.tsx
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

interface Props {
    addTodo: (text: string) => void;
}

const TodoInput: React.FC<Props> = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleAddClick = () => {
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <div>
            <TextField
                label="New Todo"
                variant="outlined"
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{ marginRight: 16 }}
            />
            <Button variant="contained" color="primary" onClick={handleAddClick}>
                Add
            </Button>
        </div>
    );
};

export default TodoInput;