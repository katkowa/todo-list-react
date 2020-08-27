import React, { useState } from 'react';
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from './Header';
import Container from "./Container";
import { useTasks } from "./useTasks";

function App() {
  const [isDoneHide, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(isDoneHide => !isDoneHide);
  }

  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

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
