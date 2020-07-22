import React, { useState } from 'react';
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from './Header';
import Container from "./Container";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "zjeść obiad", done: true },
]

function App() {
  const [isDoneHide, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(isDoneHide => !isDoneHide);
  }

  return (
    <div className="App">
      <Container>
        <Header title="Lista zadań" />

        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
        />

        <Section
          title="Lista zadań"
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              isDoneHide={isDoneHide}
              toggleHideDone={toggleHideDone} />
          }
          body={
            <TasksList tasks={tasks} isDoneHide={isDoneHide} />
          }
        />

      </Container>
    </div>
  );
}

export default App;
