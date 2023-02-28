import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Header from "./Header";


const tasks = [
  {id: 1, content: "umyć podłogę", done: true},
  {id: 2, content: "pomalować paznokcie", done: true},
];
const hideDoneTasks = false;

function App() {
  return (
    <main className="body">
      <Header title="Lista zadań"/>
      <Form />
      <div className="list">
        <h2 className="tasks__header">Lista zadań</h2>
        <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
      </div>
      <div className="tasks"></div>
      <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
</main >
  );
}

export default App;
