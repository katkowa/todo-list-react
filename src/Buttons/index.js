import React from "react";
import "./style.css";

const Buttons = ({tasks, isDoneHide}) => (
    tasks.length > 0 && (
        <div className="buttonsContainer">
            <button className="buttonsContainer__button">
                {isDoneHide ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="buttonsContainer__button"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
);

export default Buttons;