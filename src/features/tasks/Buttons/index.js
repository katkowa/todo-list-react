import React from "react";
import { ButtonsContainer, Button } from "./styled";

const Buttons = ({ tasks, isDoneHide, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <ButtonsContainer>
            <Button
                onClick={toggleHideDone}
            >
                {isDoneHide ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </Button>
        </ButtonsContainer>
    )
);

export default Buttons;