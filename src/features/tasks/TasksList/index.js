import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, selectIsHideDone, toggleTaskDone, removeTask } from "../tasksSlice";
import { List, Item, Button, Content } from "./styled";

const TasksList = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectIsHideDone);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map(task => (
        <Item
          key={task.id}
          hidden={hideDone && task.done}
        >
          <Button
            toggleDone
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✔" : ""}
          </Button>
          <Content done={task.done}>
            {task.content}
          </Content>
          <Button
            remove
            onClick={() => dispatch(removeTask(task.id))}
          >
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
}

export default TasksList;