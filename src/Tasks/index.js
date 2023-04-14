import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (

    <ul className="tasksList">
        {tasks.map(task => (
            <li
                className={`tasksList__item ${task.done && hideDone ? "tasksList__item--hidden" : ""}`}
                key={task.id}>
                <button
                    className=" tasksList__buttonDone"
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </button>
                <span className={`tasksList__content ${task.done ? "tasksList__content--done" : ""}`}>
                    {task.content}</span>
                <button className={`tasksList__buttonDone tasksList__buttonRemove  tasksList__buttonRemove`}
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;