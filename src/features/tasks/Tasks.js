import React from 'react';
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from '../../common/Header';
import Container from "../../common/Container";

function Tasks() {
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
          extraHeaderContent={<Buttons />}
          body={<TasksList />}
        />

      </Container>
    </div>
  );
}

export default Tasks;
