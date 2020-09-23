import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ButtonsContainer, Button } from "./styled";
import {
    selectIsHideDone,
    selectAreTasksEmpty,
    selectIsAllDone,
    toggleHideDone,
    setAllDone,
    fetchExampleTasks
} from "../tasksSlice";

const Buttons = () => {
    const hideDone = useSelector(selectIsHideDone);
    const isAllDone = useSelector(selectIsAllDone);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const dispatch = useDispatch();

    return (
        <ButtonsContainer>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
                </Button>
            {areTasksEmpty && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())} >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={isAllDone}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </ButtonsContainer>
    );
}

export default Buttons;