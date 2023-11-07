import { useState, useEffect } from "react";
import { AuthData } from "../store/auth.store";



declare type Key = 'auth' | 'test';

export function useLocalStorageState(initialState: AuthData | null, key: Key) {
    const [value, setValue] = useState(function () {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialState;
    });

    useEffect(
        function () {
            localStorage.setItem(key, JSON.stringify(value));
        },
        [value, key]
    );

    const getParsedValue = (key: Key) => {
        return JSON.parse(localStorage.getItem(key) as string);
    }

    return { value, setValue, getParsedValue };
}
