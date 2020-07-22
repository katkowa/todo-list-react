import React from "react";
import "./style.css";

const Buttons = ({ tasks, isDoneHide, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <div className="buttonsContainer">
            <button
                onClick={toggleHideDone}
                className="buttonsContainer__button"
            >
                {isDoneHide ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                onClick={setAllDone}
                className="buttonsContainer__button"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
);

export default Buttons;