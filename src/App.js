import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Header from "./Header";
import Container from "./Container";
import Section from "./Section";

const tasks = [
  { id: 1, content: "umyć podłogę", done: false },
  { id: 2, content: "pomalować paznokcie", done: true },
];
const hideDoneTasks = false;

function App() {
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
        headerExtra={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </Container >
  );
}

export default App;
