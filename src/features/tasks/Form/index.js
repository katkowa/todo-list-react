import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { StyledForm, Input, Button } from "./styled";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "./../tasksSlice";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContentTrimmed = newTaskContent.trim();
        if (!newTaskContentTrimmed) {
            return;
        }

        dispatch(addTask({
            content: newTaskContentTrimmed,
            done: false,
            id: nanoid(),
        }));

        setNewTaskContent("");
        inputRef.current.focus();
    }

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>Dodaj zadanie</Button>
        </StyledForm>
    )
};

export default Form;