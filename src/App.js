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
const hideDone = false;

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
        headerExtra={<Buttons tasks={tasks} hideDone={hideDone} />}
        body={<Tasks tasks={tasks} hideDone={hideDone} />}
      />
    </Container >
  );
}

export default App;
