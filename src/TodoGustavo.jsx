import React, { useState } from 'react';
import { TextField, Card, CardContent } from '@mui/material';
import { Delete } from '@mui/icons-material';

//se instalo las dependencias de MUI
//npm install @mui/material @emotion/react @emotion/styled
//npm install @mui/icons-material

const TodoList = () => {
  
  const [task, setTask] = useState('');

 

  return (
    <Card sx={{ }}>
      <CardContent>
        <h1>TODO GUSTAVO</h1>
        <div style={{  }}>
          <TextField
            label="Nueva Tarea"
            variant="outlined"
            fullWidth
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

        </div>

      </CardContent>

    </Card>
  );
};

export default TodoList;
