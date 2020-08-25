import React from "react";
import { List, Item, Button, Content } from "./styled";

const TasksList = ({ tasks, isDoneHide, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map(task => (
      <Item
        key={task.id}
        hidden={isDoneHide && task.done}
      >
        <Button
          toggleDone
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✔" : ""}
        </Button>
        <Content done={task.done}>
          {task.content}
        </Content>
        <Button
          remove
          onClick={() => removeTask(task.id)}
        >
          🗑
        </Button>
      </Item>
    ))}
  </List>
);

export default TasksList;