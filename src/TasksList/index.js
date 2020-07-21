import React from "react";
import "./style.css";

const TasksList = ({ tasks, isDoneHide }) => (
  <ul className="tasksList">
    {tasks.map(task => (
      <li
        key={task.id}
        className={`tasksList__item${isDoneHide && task.done ? " tasksList__item--hidden" : ""}`}
      >
        <button className="tasksList__button tasksList__button--toggleDone">
          {task.done ? "✔" : ""}
        </button>
        <span className=
          {`tasksList__taskContent${task.done ? " tasksList__taskContent--done" : ""}`}
        >
          {task.content}
        </span>
        <button className="tasksList__button tasksList__button--remove">
          🗑
                </button>
      </li>
    ))}
  </ul>
);

export default TasksList;