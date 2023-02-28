import "./style.css"

const Tasks = (props) => (

    <ul className="tasksList">
        {props.tasks.map(task => (
            <li
            className={`tasksList__item ${task.done && props.hideDoneTasks  ? "tasksList__item--hidden" :""}`}
            key={task.id}>
                <button className=" tasksList__buttonDone">
               {task.done ? "✔" : ""}
               </button>   
               <span className={`tasksList__content ${task.done ? "tasksList__content--done" : ""}`}>
               {task.content}</span>
               <button className={`tasksList__buttonDone tasksList__buttonRemove  tasksList__buttonRemove`}>
                   🗑
                   </button>
            </li>
        ))}
    </ul>
);

export default Tasks;