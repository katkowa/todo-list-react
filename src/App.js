import React, { useState, useEffect } from 'react';
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from './Header';
import Container from "./Container";

const getInitializeTasksList = () => {
  return localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
}

function App() {
  const [isDoneHide, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(getInitializeTasksList);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleHideDone = () => {
    setHideDone(isDoneHide => !isDoneHide);
  }

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  }

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    }));

  }

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task =>
      ({
        ...task, done: true
      })));
  }

  const addNewTask = (content) => {
    setTasks(tasks =>
      [
        ...tasks,
        {
          content,
          done: false,
          id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        }
      ]);
  }

  return (
    <div className="App">
      <Container>
        <Header title="Lista zadań" />

        <Section
          title="Dodaj nowe zadanie"
          body={<Form addNewTask={addNewTask} />}
        />

        <Section
          title="Lista zadań"
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              isDoneHide={isDoneHide}
              toggleHideDone={toggleHideDone}
              setAllDone={setAllDone}
            />
          }
          body={
            <TasksList
              tasks={tasks}
              isDoneHide={isDoneHide}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />
          }
        />

      </Container>
    </div>
  );
}

export default App;
