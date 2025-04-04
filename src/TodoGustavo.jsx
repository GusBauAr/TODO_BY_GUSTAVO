import React, { useState } from 'react';
import { TextField, Button, List, ListItem, Card, CardContent,} from '@mui/material';
import { Delete } from '@mui/icons-material';

//se instalo las dependencias de MUI
//npm install @mui/material @emotion/react @emotion/styled
//npm install @mui/icons-material

const TodoGustavo = () => {
    const [tasks, setTasks] = useState([]); //guarda las tareas y actualiza y array vacio
    const [task, setTask] = useState(''); //almacena lo que se escribe y actualiza y string vacio

    // aqui se agrega tareas
    const addTask = () => {
        if (task.trim() !== '') { //ELIMINA ESPACIO EN BLANCO
        setTasks([...tasks, task]);//Se agrega nueva tarea
        setTask(''); 
        }
    };

    // Eliminar tarea
    const removeTask = (index) => { //que indica la posición de la tarea para eliminar en el array tasks.
    setTasks(tasks.filter((_, i) => i !== index)); //actualiza el tasks despues de eliminar,crea de nuevo un array excepto con la que queremos eliminar y mantieneel las tareas que no queremos eliminar
    };
    
   

// CardContent: Agrupa el contenido
//onChange={(e) => setTask(e.target.value)}: Cuendo escribes se actualiza el estado.
//onClick={addTask}: Al hacer clic ejecuta la función addTask.
//<span>(t)</span>: muestra el texto cuando se agrega

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
        <List>
          {tasks.map((t, index) => ( //recoge y genera una lista por tarea
            <ListItem key={index} style={{ justifyContent: 'space-between' }} >
              <span>{t}</span>
              <IconButton edge="end" onClick={() => removeTask(index)}>
                <Delete />
              </IconButton>
            </ListItem>
          ))}
          

        </List>
      </CardContent>
    </Card>
  );
};

export default TodoGustavo;
