import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
    const getInitialValue = () => {
        return localStorage.getItem(key)
            ? JSON.parse(localStorage.getItem(key))
            : initialValue;
    }

    const [state, setState] = useState(getInitialValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}