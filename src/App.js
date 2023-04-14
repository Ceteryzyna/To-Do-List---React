import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Header from "./Header";
import Container from "./Container";
import Section from "./Section";
import { useState } from 'react';

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "umyć podłogę", done: false },
    { id: 2, content: "pomalować paznokcie", done: true },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  }

  return (
    <Container>
      <Header
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        headerExtra={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone} />
        }
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone} 
            removeTask={removeTask}/>
        }
      />
    </Container >
  );
}

export default App;
