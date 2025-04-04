import React, { useState } from 'react';
import { TextField, Card, CardContent,Button } from '@mui/material';
import { Delete } from '@mui/icons-material';

//se instalo las dependencias de MUI
//npm install @mui/material @emotion/react @emotion/styled
//npm install @mui/icons-material

const TodoList = () => {
  
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim() !== '') { //ELIMINA ESPACIO EN BLANCO
      setTasks([...tasks, task]);//Se agrega nueva tarea
      setTask(''); 
    }
  };

// CardContent: Agrupa el contenido
//onChange={(e) => setTask(e.target.value)}: Cuendo escribes se actualiza el estado.
//onClick={addTask}: Al hacer clic ejecuta la función addTask.

  return (
    <Card>
      <CardContent>
        <h1>TODO GUSTAVO</h1>
        <div>
          <TextField
            label="Nueva Tarea"
            variant="outlined"
            fullWidth
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button variant="contained" onClick={addTask}> AGREGAR </Button>
        </div>
      </CardContent>

    </Card>
  );
};

export default TodoList;
